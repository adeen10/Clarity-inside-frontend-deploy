import { Link } from "react-router-dom"
import { Logo } from "./logo"

export function Footer() {
  return (
    <footer className="bg-background pt-12 pb-10 border-t border-brand-fog">
      <div className="w-full px-6 md:px-12">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-12 mb-10">
          {/* Brand Column */}
          <div className="flex flex-col gap-6 lg:max-w-[320px]">
            <Logo />
            <p className="text-[#5C6E71] text-[15px] leading-relaxed">
              A calm space to understand your mental wellbeing through simple, research-informed self-assessments.
            </p>
          </div>

          {/* Links Groups */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-20 lg:gap-24 xl:gap-48">
            {/* Free Tests Column */}
            <div>
              <h4 className="font-heading font-semibold text-brand-slate text-[17px] mb-4 lg:mb-6 whitespace-nowrap">Free Tests</h4>
              <ul className="flex flex-col gap-3">
                <li><Link to="/gad-7" className="text-[#5C6E71] hover:text-brand-teal transition-colors text-[15px] whitespace-nowrap">Anxiety Test</Link></li>
                <li><Link to="/adhd" className="text-[#5C6E71] hover:text-brand-teal transition-colors text-[15px] whitespace-nowrap">ADHD Test</Link></li>
                <li><Link to="/autism" className="text-[#5C6E71] hover:text-brand-teal transition-colors text-[15px] whitespace-nowrap">Autism Test</Link></li>
              </ul>
            </div>

            {/* About Column */}
            <div>
              <h4 className="font-heading font-semibold text-brand-slate text-[17px] mb-4 lg:mb-6 whitespace-nowrap">About</h4>
              <ul className="flex flex-col gap-3">
                <li><Link to="/about" className="text-[#5C6E71] hover:text-brand-teal transition-colors text-[15px] whitespace-nowrap">About Us</Link></li>
                <li><Link to="/how-it-works" className="text-[#5C6E71] hover:text-brand-teal transition-colors text-[15px] whitespace-nowrap">How It Works</Link></li>
                <li><Link to="/blog" className="text-[#5C6E71] hover:text-brand-teal transition-colors text-[15px] whitespace-nowrap">Blog</Link></li>
              </ul>
            </div>

            {/* Support Column */}
            <div>
              <h4 className="font-heading font-semibold text-brand-slate text-[17px] mb-4 lg:mb-6 whitespace-nowrap">Support</h4>
              <ul className="flex flex-col gap-3">
                <li><Link to="/contact" className="text-[#5C6E71] hover:text-brand-teal transition-colors text-[15px] whitespace-nowrap">Contact</Link></li>
                <li><Link to="/privacy" className="text-[#5C6E71] hover:text-brand-teal transition-colors text-[15px] whitespace-nowrap">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-[#5C6E71] hover:text-brand-teal transition-colors text-[15px] whitespace-nowrap">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-brand-fog flex flex-col items-center">
          <p className="text-[#5C6E71]/40 text-sm">
            © 2026 Clarity Inside. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
