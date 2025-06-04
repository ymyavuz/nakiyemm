import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import * as path from 'path';
import * as XLSX from 'xlsx';
import * as os from 'os';

// Excel dosyasını işleyen fonksiyon
async function parseExcel(filePath: string) {
  try {
    // Excel dosyasını oku
    const workbook = XLSX.readFile(filePath);
    const result = [];
    
    // Her bir sayfayı işle
    for (let i = 0; i < workbook.SheetNames.length; i++) {
      const sheetName = workbook.SheetNames[i];
      const sheet = workbook.Sheets[sheetName];
      
      // Sayfa adına göre şirket ID'sini belirle (sayfa adları farklı olabilir)
      const sirket_id = i + 1; // Sayfa indeksine göre (0 -> 1, 1 -> 2, 2 -> 3)
      
      // Sayfayı JSON'a dönüştür
      let jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: null });
      
      // İlk satır başlıkları içerir, ikinci satırdan itibaren veri başlar
      const headers = jsonData[0] as string[];
      const rows = jsonData.slice(1) as any[][];
      
      // Başlık olmayan veya boş satırları atla
      if (!headers || headers.length === 0) {
        continue;
      }
      
      // İşlenmiş verileri sakla
      const processedRows = rows
        .filter(row => row.some(cell => cell !== null && cell !== '')) // Boş satırları filtrele
        .map(row => {
          const rowData: any = {};
          headers.forEach((header, index) => {
            if (header) {
              // Başlık varsa, değeri ekle (boş değilse)
              rowData[header] = row[index];
            }
          });
          return rowData;
        });
      
      result.push({
        sirket_id,
        sayfaAdi: sheetName,
        veriler: processedRows
      });
    }
    
    return result;
  } catch (error) {
    console.error('Excel dosyası işleme hatası:', error);
    throw new Error('Excel dosyası işlenirken bir hata oluştu');
  }
}

export async function POST(request: Request) {
  try {
    // multipart/form-data olarak gelen veriyi oku
    const formData = await request.formData();
    const file = formData.get('excel') as File;

    if (!file) {
      return NextResponse.json({ error: 'Dosya bulunamadı' }, { status: 400 });
    }

    // Dosya içeriğini buffer'a çevir
    const buffer = Buffer.from(await file.arrayBuffer());

    // Geçici bir dosya yolu oluştur
    const tempDir = os.tmpdir();
    const tempFilePath = path.join(tempDir, file.name);

    // Dosyayı geçici olarak kaydet
    await writeFile(tempFilePath, buffer);

    // Excel dosyasını işle
    const excelData = await parseExcel(tempFilePath);

    // Verileri doğrudan geri gönder
    return NextResponse.json({
      message: 'Excel dosyası başarıyla yüklendi ve işlendi',
      data: excelData
    });
    
  } catch (error: any) {
    console.error('API hatası:', error);
    return NextResponse.json({ 
      error: 'Dosya yüklenirken veya işlenirken bir hata oluştu: ' + error.message 
    }, { status: 500 });
  }
} 