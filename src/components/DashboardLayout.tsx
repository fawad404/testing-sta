
import { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { 
  Fuel, 
  Car, 
  FileText, 
  Building, 
  Users, 
  Settings,
  BarChart3,
  Bell,
  LogOut,
  Menu
} from "lucide-react";

const DashboardLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3, path: '/dashboard' },
    { id: 'vehicles', label: 'Vehicles', icon: Car, path: '/dashboard/vehicles' },
    { id: 'invoices', label: 'Invoices', icon: FileText, path: '/dashboard/invoices' },
    { id: 'stations', label: 'Stations', icon: Building, path: '/dashboard/stations' },
    { id: 'attendants', label: 'Attendants', icon: Users, path: '/dashboard/attendants' },
    { id: 'settings', label: 'Settings', icon: Settings, path: '/dashboard/settings' },
  ];

  const SidebarContent = () => (
    <nav className="p-4 space-y-2">
      {sidebarItems.map((item) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.path;
        return (
          <Link
            key={item.id}
            to={item.path}
            onClick={() => setIsMobileMenuOpen(false)}
            className={`w-full flex items-center px-3 py-2 text-left rounded-lg transition-colors ${
              isActive 
                ? 'bg-blue-50 text-blue-700 border border-blue-200' 
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Icon className={`h-5 w-5 mr-3 ${isActive ? 'text-blue-600' : 'text-gray-400'}`} />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              {/* Mobile menu button */}
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm" className="md:hidden mr-2">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-64 p-0">
                  <div className="flex items-center p-4 border-b">
                    <Fuel className="h-8 w-8 text-blue-600" />
                    <span className="ml-2 text-xl font-bold text-gray-900">FabHant</span>
                  </div>
                  <SidebarContent />
                </SheetContent>
              </Sheet>

              <Fuel className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">FabHant</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="h-4 w-4" />
              </Button>
              <Link to="/">
                <Button variant="ghost" size="sm">
                  <LogOut className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Desktop Sidebar */}
        <div className="hidden md:block w-64 bg-white border-r border-gray-200 min-h-screen sticky top-16">
          <SidebarContent />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 md:p-6 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
