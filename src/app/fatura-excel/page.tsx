'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FileSpreadsheet, Building2, Users, Calendar, ArrowRight, Loader2 } from 'lucide-react';

interface Sirket {
  sirket_id: number;
  sirket_adi: string;
  vergi_numarasi: string;
}

interface Arac {
  arac_id: number;
  plaka: string;
  sofor_adi: string;
  vergi_numarasi: string;
  sirket_id: number;
  sirket: {
    sirket_adi: string;
  };
}

const FaturaExcelPage = () => {
  const [step, setStep] = useState(1);
  const [faturaType, setFaturaType] = useState('');
  const [selectedCompany, setSelectedCompany] = useState('');
  const [selectedDriver, setSelectedDriver] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedPeriod, setSelectedPeriod] = useState('');
  const [loading, setLoading] = useState(false);
  const [companies, setCompanies] = useState<Sirket[]>([]);
  const [drivers, setDrivers] = useState<Arac[]>([]);

  const months = [
    { value: '01', label: 'Ocak' },
    { value: '02', label: 'Şubat' },
    { value: '03', label: 'Mart' },
    { value: '04', label: 'Nisan' },
    { value: '05', label: 'Mayıs' },
    { value: '06', label: 'Haziran' },
    { value: '07', label: 'Temmuz' },
    { value: '08', label: 'Ağustos' },
    { value: '09', label: 'Eylül' },
    { value: '10', label: 'Ekim' },
    { value: '11', label: 'Kasım' },
    { value: '12', label: 'Aralık' }
  ];

  const periods = ['Dönem 1', 'Dönem 2', 'Dönem 3'];

  // Şirket ve araç verilerini getir
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Şirketleri getir
        const sirketlerResponse = await fetch('/api/sirketler');
        if (sirketlerResponse.ok) {
          const sirketlerData = await sirketlerResponse.json();
          setCompanies(sirketlerData);
        }

        // Araçları getir
        const araclarResponse = await fetch('/api/araclar');
        if (araclarResponse.ok) {
          const araclarData = await araclarResponse.json();
          setDrivers(araclarData);
        }
      } catch (error) {
        console.error('Veri çekme hatası:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleGenerateExcel = () => {
    // Bu kısım daha sonra excel oluşturma fonksiyonu ile değiştirilecek
    const selectedCompanyName = faturaType === 'sirket' 
      ? companies.find(c => c.sirket_id.toString() === selectedCompany)?.sirket_adi
      : drivers.find(d => d.arac_id.toString() === selectedDriver)?.sirket.sirket_adi;
    
    const selectedDriverName = faturaType === 'sofor' 
      ? drivers.find(d => d.arac_id.toString() === selectedDriver)?.sofor_adi
      : '';

    alert(`Excel oluşturuluyor...\nFatura Türü: ${faturaType === 'sirket' ? 'Şirket İçin Fatura' : 'Şöför İçin Fatura'}\nŞirket: ${selectedCompanyName}\n${faturaType === 'sofor' ? `Şöför: ${selectedDriverName}\n` : ''}Ay: ${months.find(m => m.value === selectedMonth)?.label}\nDönem: ${selectedPeriod}`);
  };

  const canProceed = () => {
    switch (step) {
      case 1: return faturaType !== '';
      case 2: return faturaType === 'sirket' ? selectedCompany !== '' : selectedDriver !== '';
      case 3: return selectedMonth !== '' && selectedPeriod !== '';
      case 4: return true;
      default: return false;
    }
  };

  if (loading) {
    return (
      <div className="p-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center h-64">
            <Loader2 className="w-8 h-8 animate-spin text-blue-600 mr-3" />
            <span className="text-lg text-gray-600">Veriler yükleniyor...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Fatura Excel Oluştur</h1>
          <Link 
            href="/"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors mt-4 inline-block"
          >
            Ana Sayfaya Dön
          </Link>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Adım {step} / 4</span>
            <span className="text-sm text-gray-600">{Math.round((step / 4) * 100)}% Tamamlandı</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / 4) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Step 1: Fatura Türü Seçimi */}
          {step === 1 && (
            <div>
              <div className="flex items-center mb-6">
                <FileSpreadsheet className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-800">Fatura Türünü Seçin</h2>
              </div>
              <p className="text-gray-600 mb-6">Bu fatura hangi tür için oluşturulacak?</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  onClick={() => {
                    setFaturaType('sirket');
                    setSelectedCompany('');
                    setSelectedDriver('');
                  }}
                  className={`p-6 border-2 rounded-lg text-left transition-all ${
                    faturaType === 'sirket' 
                      ? 'border-blue-500 bg-blue-50' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Building2 className="w-8 h-8 text-blue-600 mb-3" />
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Şirket İçin Fatura</h3>
                  <p className="text-gray-600">Şirket fatura ve fiyat bilgileri için Excel oluştur</p>
                </button>

                <button
                  onClick={() => {
                    setFaturaType('sofor');
                    setSelectedCompany('');
                    setSelectedDriver('');
                  }}
                  className={`p-6 border-2 rounded-lg text-left transition-all ${
                    faturaType === 'sofor' 
                      ? 'border-blue-500 bg-blue-50' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Users className="w-8 h-8 text-green-600 mb-3" />
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Şöför İçin Fatura</h3>
                  <p className="text-gray-600">Şöför fatura ve fiyat bilgileri için Excel oluştur</p>
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Şirket/Şöför Seçimi */}
          {step === 2 && (
            <div>
              <div className="flex items-center mb-6">
                {faturaType === 'sirket' ? (
                  <Building2 className="w-8 h-8 text-blue-600 mr-3" />
                ) : (
                  <Users className="w-8 h-8 text-green-600 mr-3" />
                )}
                <h2 className="text-2xl font-semibold text-gray-800">
                  {faturaType === 'sirket' ? 'Şirket Seçin' : 'Şöför Seçin'}
                </h2>
              </div>
              <p className="text-gray-600 mb-6">
                {faturaType === 'sirket' 
                  ? 'Hangi şirket için fatura oluşturulacak?' 
                  : 'Hangi şöför için fatura oluşturulacak?'
                }
              </p>
              
              {faturaType === 'sirket' ? (
                // Şirket Seçimi
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-96 overflow-y-auto">
                  {companies.map((company) => (
                    <button
                      key={company.sirket_id}
                      onClick={() => setSelectedCompany(company.sirket_id.toString())}
                      className={`p-4 border-2 rounded-lg text-left transition-all ${
                        selectedCompany === company.sirket_id.toString() 
                          ? 'border-blue-500 bg-blue-50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <h3 className="text-lg font-semibold text-gray-800">{company.sirket_adi}</h3>
                      <p className="text-sm text-gray-500">Vergi No: {company.vergi_numarasi}</p>
                    </button>
                  ))}
                </div>
              ) : (
                // Şöför Seçimi
                <div className="grid grid-cols-1 gap-3 max-h-96 overflow-y-auto">
                  {drivers.map((driver) => (
                    <button
                      key={driver.arac_id}
                      onClick={() => setSelectedDriver(driver.arac_id.toString())}
                      className={`p-4 border-2 rounded-lg text-left transition-all ${
                        selectedDriver === driver.arac_id.toString() 
                          ? 'border-blue-500 bg-blue-50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800">{driver.sofor_adi}</h3>
                          <p className="text-sm text-gray-600">Plaka: {driver.plaka}</p>
                          <p className="text-sm text-gray-500">Vergi No: {driver.vergi_numarasi}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-gray-600">{driver.sirket.sirket_adi}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Step 3: Ay ve Dönem Seçimi */}
          {step === 3 && (
            <div>
              <div className="flex items-center mb-6">
                <Calendar className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-800">Ay ve Dönem Seçin</h2>
              </div>
              <p className="text-gray-600 mb-6">Hangi ay ve dönem için fatura oluşturulacak?</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Ay Seçimi */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Ay Seçin</h3>
                  <select
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Ay seçiniz...</option>
                    {months.map((month) => (
                      <option key={month.value} value={month.value}>
                        {month.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Dönem Seçimi */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Dönem Seçin</h3>
                  <div className="space-y-2">
                    {periods.map((period) => (
                      <button
                        key={period}
                        onClick={() => setSelectedPeriod(period)}
                        className={`w-full p-3 border-2 rounded-lg text-left transition-all ${
                          selectedPeriod === period 
                            ? 'border-blue-500 bg-blue-50' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        {period}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Özet ve Excel Oluşturma */}
          {step === 4 && (
            <div>
              <div className="flex items-center mb-6">
                <FileSpreadsheet className="w-8 h-8 text-green-600 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-800">Excel Oluştur</h2>
              </div>
              <p className="text-gray-600 mb-6">Seçtiğiniz bilgilere göre Excel dosyası oluşturulacak.</p>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Seçilen Bilgiler:</h3>
                <div className="space-y-2">
                  <p><span className="font-medium">Fatura Türü:</span> {faturaType === 'sirket' ? 'Şirket İçin Fatura' : 'Şöför İçin Fatura'}</p>
                  {faturaType === 'sirket' ? (
                    <p><span className="font-medium">Şirket:</span> {companies.find(c => c.sirket_id.toString() === selectedCompany)?.sirket_adi}</p>
                  ) : (
                    <>
                      <p><span className="font-medium">Şöför:</span> {drivers.find(d => d.arac_id.toString() === selectedDriver)?.sofor_adi}</p>
                      <p><span className="font-medium">Plaka:</span> {drivers.find(d => d.arac_id.toString() === selectedDriver)?.plaka}</p>
                      <p><span className="font-medium">Şirket:</span> {drivers.find(d => d.arac_id.toString() === selectedDriver)?.sirket.sirket_adi}</p>
                    </>
                  )}
                  <p><span className="font-medium">Ay:</span> {months.find(m => m.value === selectedMonth)?.label}</p>
                  <p><span className="font-medium">Dönem:</span> {selectedPeriod}</p>
                </div>
              </div>

              <button
                onClick={handleGenerateExcel}
                className="w-full bg-green-600 text-white py-4 px-6 rounded-lg hover:bg-green-700 transition-colors font-semibold text-lg"
              >
                Excel Dosyası Oluştur
              </button>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={handleBack}
              disabled={step === 1}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                step === 1 
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Geri
            </button>

            {step < 4 ? (
              <button
                onClick={handleNext}
                disabled={!canProceed()}
                className={`px-6 py-2 rounded-lg font-medium transition-colors flex items-center ${
                  canProceed() 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                }`}
              >
                İleri
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaturaExcelPage; 