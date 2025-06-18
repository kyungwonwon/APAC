"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, Ship, TrendingUp, Users, Mail, Phone, MapPin, ArrowRight, CheckCircle } from "lucide-react"

export default function APACTradingPage() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-black text-slate-800 tracking-tight">
              APAC <span className="text-blue-600 font-black">무역</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("about")}
                className="text-slate-600 hover:text-blue-600 transition-colors font-medium"
              >
                회사소개
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-slate-600 hover:text-blue-600 transition-colors font-medium"
              >
                서비스
              </button>
              <button
                onClick={() => scrollToSection("regions")}
                className="text-slate-600 hover:text-blue-600 transition-colors font-medium"
              >
                거래지역
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-slate-600 hover:text-blue-600 transition-colors font-medium"
              >
                연락처
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920&text=Global+Trade+Network')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tight">
            동아시아 무역의
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-black">
              새로운 지평
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed font-light">
            Asia · Peninsula · Archipelago · Continent
            <br />
            전문성과 신뢰를 바탕으로 글로벌 비즈니스를 연결합니다
          </p>
          <Button
            onClick={() => scrollToSection("about")}
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold"
          >
            자세히 알아보기 <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full">
            <div className="w-1 h-3 bg-white/70 rounded-full mx-auto mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-6 tracking-tight">APAC 무역이란?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              동아시아 4개 핵심 지역을 연결하는 전문 무역 파트너입니다
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-black text-blue-600">A</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Asia</h3>
                <p className="text-gray-600 font-light">아시아 전체 시장을 아우르는 광범위한 네트워크</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-black text-green-600">P</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Peninsula</h3>
                <p className="text-gray-600 font-light">한반도의 첨단 기술과 혁신 제조업</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-black text-red-600">A</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Archipelago</h3>
                <p className="text-gray-600 font-light">일본 열도의 정밀 기술과 품질 관리</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-black text-yellow-600">C</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Continent</h3>
                <p className="text-gray-600 font-light">중국 대륙의 거대한 제조업과 소비 시장</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-black text-slate-800 mb-6 tracking-tight">우리의 비전</h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed font-light">
                  APAC 무역은 동아시아 지역의 경제적 연결고리 역할을 하며, 각국의 강점을 활용한 상호 보완적 무역
                  생태계를 구축합니다.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                    <span className="text-gray-700 font-medium">15년 이상의 동아시아 무역 경험</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                    <span className="text-gray-700 font-medium">4개국 현지 파트너 네트워크</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                    <span className="text-gray-700 font-medium">연간 1,000건 이상 거래 성사</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/placeholder.svg?height=400&width=500&text=Business+Network"
                  alt="Business Network"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-6 tracking-tight">주요 서비스</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              전문적이고 체계적인 무역 서비스로 여러분의 비즈니스 성공을 지원합니다
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="pt-0">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                  <Mail className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">통역 및 번역</h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  한국어, 중국어, 일본어 전문 통역사가 원활한 소통을 지원하여 성공적인 비즈니스를 도와드립니다.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="pt-0">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Ship className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">수출입 대행</h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  복잡한 수출입 절차를 전문가가 대행하여 시간과 비용을 절약하고 안전한 거래를 보장합니다.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="pt-0">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <Globe className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">시장 진출 컨설팅</h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  각국의 시장 특성과 규제 환경을 분석하여 최적의 진출 전략을 수립해드립니다.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="pt-0">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">파트너 매칭</h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  신뢰할 수 있는 현지 파트너와 연결하여 안정적인 비즈니스 관계를 구축할 수 있도록 지원합니다.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="pt-0">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <TrendingUp className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">시장 분석</h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  실시간 시장 동향과 가격 정보를 제공하여 최적의 거래 타이밍을 잡을 수 있도록 도와드립니다.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="pt-0">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">품질 관리</h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  엄격한 품질 검수와 인증 절차를 통해 최고 품질의 제품만을 거래할 수 있도록 관리합니다.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Regions Section */}
      <section id="regions" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-6 tracking-tight">주요 거래 지역</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              동아시아 핵심 시장에서의 풍부한 경험과 네트워크를 바탕으로 서비스를 제공합니다
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-3xl font-black mb-2 tracking-tight">대한민국</h3>
                  <p className="text-blue-100 font-light">Peninsula · 반도</p>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4 font-light leading-relaxed">
                  첨단 IT, 자동차, 조선, 화학 산업의 글로벌 리더. K-문화와 함께 세계 시장에서 독특한 경쟁력을 보유한
                  혁신 국가입니다.
                </p>
                <div className="text-sm text-gray-500 font-medium">주요 품목: 반도체, 자동차, 화장품, 전자제품</div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-3xl font-black mb-2 tracking-tight">일본</h3>
                  <p className="text-red-100 font-light">Archipelago · 열도</p>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4 font-light leading-relaxed">
                  정밀 기술과 품질 관리의 대명사. 자동차, 전자제품, 정밀기계 분야에서 세계 최고 수준의 기술력을
                  자랑합니다.
                </p>
                <div className="text-sm text-gray-500 font-medium">주요 품목: 자동차, 정밀기계, 전자부품, 소재</div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-3xl font-black mb-2 tracking-tight">중국</h3>
                  <p className="text-yellow-100 font-light">Continent · 대륙</p>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4 font-light leading-relaxed">
                  세계 최대의 제조업 기지이자 거대한 소비 시장. 급속한 경제 성장과 함께 첨단 기술 분야에서도 빠르게
                  발전하고 있습니다.
                </p>
                <div className="text-sm text-gray-500 font-medium">주요 품목: 전자제품, 섬유, 기계류, 화학제품</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-800 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">연락처</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
              동아시아 무역의 새로운 기회를 함께 만들어가겠습니다
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12">
            <div className="max-w-md mx-auto">
              <h3 className="text-2xl font-bold mb-8 text-center tracking-tight">문의하기</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-blue-400 mr-4" />
                  <div>
                    <div className="font-semibold">전화</div>
                    <div className="text-gray-300 font-light">+82-2-1234-5678</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-blue-400 mr-4" />
                  <div>
                    <div className="font-semibold">이메일</div>
                    <div className="text-gray-300 font-light">info@apactrade.com</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-blue-400 mr-4" />
                  <div>
                    <div className="font-semibold">주소</div>
                    <div className="text-gray-300 font-light">서울특별시 강남구 테헤란로 123</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-gray-400 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-black text-white mb-4 md:mb-0 tracking-tight">
              APAC <span className="text-blue-400 font-black">무역</span>
            </div>
            <div className="text-center md:text-right">
              <p className="font-medium">&copy; 2024 APAC 무역. All rights reserved.</p>
              <p className="text-sm mt-1 font-light">Asia · Peninsula · Archipelago · Continent</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
