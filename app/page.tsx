'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Preloader from '@/components/Preloader'
import Hero from '@/components/Hero'
import Benefits from '@/components/Benefits'
import About from '@/components/About'
import Services from '@/components/Services'
import Masters from '@/components/Masters'
import Reviews from '@/components/Reviews'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import ModalBooking from '@/components/ModalBooking'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [bookingData, setBookingData] = useState<{
    service?: string
    master?: string
  }>({})

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  const openModal = (service?: string, master?: string) => {
    setBookingData({ service, master })
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setBookingData({})
  }

  if (isLoading) {
    return <Preloader />
  }

  return (
    <>
      <Header onBookClick={() => openModal()} />
      <Hero onBookClick={() => openModal()} />
      <Benefits />
      <About />
      <Services onBookClick={(service) => openModal(service)} />
      <Masters onBookClick={(service, master) => openModal(service, master)} />
      <Reviews />
      <FAQ />
      <CTA onBookClick={() => openModal()} />
      <Footer />
      <ModalBooking
        isOpen={isModalOpen}
        onClose={closeModal}
        preselectedService={bookingData.service}
        preselectedMaster={bookingData.master}
      />
    </>
  )
}

