
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Fuel, 
  Shield, 
  Smartphone, 
  QrCode, 
  BarChart3, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Star,
  Play,
  Menu,
  X
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features = [
    {
      icon: Shield,
      title: "Instant Vehicle Blocking",
      description: "Automatically block fuel access for vehicles with unpaid invoices"
    },
    {
      icon: QrCode,
      title: "QR Code Payments",
      description: "Generate instant payment links via QR codes for quick customer payments"
    },
    {
      icon: Smartphone,
      title: "SMS Integration",
      description: "Send payment links directly to customer phones via SMS"
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Track payments, blocked vehicles, and station performance"
    },
    {
      icon: Users,
      title: "Multi-user Support",
      description: "Manage attendants and station staff with role-based access"
    },
    {
      icon: Fuel,
      title: "Station Management",
      description: "Complete fuel station operations management in one platform"
    }
  ];

  const plans = [
    {
      name: "Free",
      price: 0,
      period: "forever",
      description: "Perfect for small stations getting started",
      features: [
        "1 fuel station",
        "Up to 10 vehicles",
        "Manual payment tracking",
        "Basic reporting",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Basic",
      price: 49,
      period: "month",
      description: "Great for growing fuel stations",
      features: [
        "3 fuel stations",
        "Up to 100 vehicles",
        "QR code payments",
        "SMS notifications",
        "Advanced analytics",
        "Priority support"
      ],
      popular: true
    },
    {
      name: "Pro",
      price: 99,
      period: "month",
      description: "Everything you need for enterprise",
      features: [
        "Unlimited stations",
        "Unlimited vehicles",
        "Branded experience",
        "API access",
        "Custom integrations",
        "24/7 phone support"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Maria Rodriguez",
      role: "Station Owner",
      company: "QuickFuel Stations",
      content: "FabHant has revolutionized how we handle unpaid invoices. We've reduced payment delays by 80%.",
      rating: 5
    },
    {
      name: "James Chen",
      role: "Operations Manager",
      company: "City Gas Network",
      content: "The QR code payment system is brilliant. Our customers love the convenience and we get paid faster.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      role: "Fuel Station Manager",
      company: "Highway Fuel Co.",
      content: "Easy to use, great support team, and the analytics help us make better business decisions.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Fuel className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">FabHant</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
              <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors">Testimonials</a>
              <Link to="/login" className="text-gray-600 hover:text-gray-900 transition-colors">Login</Link>
              <Link to="/register">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Start Free Trial
                </Button>
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
                <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
                <a href="#testimonials" className="text-gray-600 hover:text-gray-900">Testimonials</a>
                <Link to="/login" className="text-gray-600 hover:text-gray-900">Login</Link>
                <Link to="/register">
                  <Button className="bg-blue-600 hover:bg-blue-700 w-full">
                    Start Free Trial
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">
              Trusted by 500+ fuel stations
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Block unpaid cars
              <span className="text-blue-600"> instantly</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Prevent fuel theft and ensure payment compliance with our intelligent vehicle blocking system. 
              Generate instant payment links via QR codes and SMS.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/register">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, fast, and effective fuel station management in just a few steps.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Enter Vehicle Plate</h3>
              <p className="text-gray-600">Station attendant types or scans the vehicle plate number into the system.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Check Invoice Status</h3>
              <p className="text-gray-600">System automatically checks for unpaid invoices and blocks fuel if necessary.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Generate Payment Link</h3>
              <p className="text-gray-600">Create instant payment links via QR code or SMS for immediate customer payment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to manage fuel stations efficiently and ensure timely payments.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your fuel station needs. Start free, upgrade anytime.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`p-8 relative ${plan.popular ? 'border-blue-500 border-2' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600">
                    Most Popular
                  </Badge>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-gray-600">/{plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to="/register">
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-900 hover:bg-gray-800'}`}
                  >
                    {plan.price === 0 ? 'Start Free' : 'Start Trial'}
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Loved by Fuel Station Owners
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what our customers say about FabHant and how it's transformed their operations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Fuel Station?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join hundreds of fuel stations already using FabHant to prevent fuel theft and ensure timely payments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-blue-200 text-white hover:bg-blue-700">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Fuel className="h-8 w-8 text-blue-400" />
                <span className="ml-2 text-xl font-bold">FabHant</span>
              </div>
              <p className="text-gray-400">
                The leading fuel station management platform for preventing theft and ensuring payments.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-white">Features</a></li>
                <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">Demo</a></li>
                <li><a href="#" className="hover:text-white">API</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Documentation</a></li>
                <li><a href="#" className="hover:text-white">Status</a></li>
                <li><a href="#" className="hover:text-white">Privacy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 FabHant. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
