import React from "react"
import "./button-arrow.module.scss"

export default ({ children }) => (
  <button>
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d)">
    <path fillRule="evenodd" clipRule="evenodd" d="M30 50C41.0457 50 50 41.0457 50 30C50 18.9543 41.0457 10 30 10C18.9543 10 10 18.9543 10 30C10 41.0457 18.9543 50 30 50Z" stroke="white" strokeWidth="2"/>
    </g>
    <path d="M33.0965 22.3086L30.9065 23.7147L36.4265 29.2347H18.4619V32.3055H36.4265L31.6758 37.0563L33.0965 39.2317L41.5388 30.7701L33.0965 22.3086Z" fill="white"/>
    <defs>
    <filter id="filter0_d" x="0" y="0" width="60" height="60" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
    <feOffset/>
    <feGaussianBlur stdDeviation="4.5"/>
    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.296082 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
    </filter>
    </defs>
    </svg>
  </button>
)
