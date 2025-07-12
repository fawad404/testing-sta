
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  DollarSign, 
  AlertTriangle, 
  Users, 
  Search,
  Shield,
  BarChart3,
  QrCode,
  CheckCircle,
  XCircle,
  Car
} from "lucide-react";
import { useState } from 'react';

const DashboardHome = () => {
  const [plateNumber, setPlateNumber] = useState('');
  const [searchResult, setSearchResult] = useState<any>(null);

  // Mock data
  const stats = {
    totalInvoices: 150,
    unpaidInvoices: 22,
    blockedToday: 6,
    totalRevenue: 45230,
  };

  const handlePlateSearch = () => {
    if (plateNumber === 'ABC-123') {
      setSearchResult({
        plate: 'ABC-123',
        status: 'unpaid',
        amount: 150,
        dueDate: '2024-01-15',
        blocked: true
      });
    } else {
      setSearchResult({
        plate: plateNumber,
        status: 'clear',
        blocked: false
      });
    }
  };

  const generatePaymentLink = () => {
    const paymentUrl = `https://fabhant.com/pay/INV-${Math.random().toString(36).substr(2, 5)}`;
    navigator.clipboard.writeText(paymentUrl);
    alert(`Payment link copied: ${paymentUrl}`);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Overview of your fuel station operations</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Invoices</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalInvoices}</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Unpaid Invoices</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{stats.unpaidInvoices}</div>
            <p className="text-xs text-muted-foreground">-5% from yesterday</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Blocked Today</CardTitle>
            <Shield className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">{stats.blockedToday}</div>
            <p className="text-xs text-muted-foreground">Vehicles blocked from fuel</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Revenue</CardTitle>
            <BarChart3 className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">${stats.totalRevenue.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">+8% from last month</p>
          </CardContent>
        </Card>
      </div>

      {/* Vehicle Check Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Car className="mr-2 h-5 w-5" />
            Quick Vehicle Check
          </CardTitle>
          <CardDescription>
            Enter vehicle plate number to check payment status
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex space-x-2">
            <Input
              placeholder="Enter plate number (e.g., ABC-123)"
              value={plateNumber}
              onChange={(e) => setPlateNumber(e.target.value)}
              className="flex-1"
            />
            <Button onClick={handlePlateSearch}>
              <Search className="h-4 w-4 mr-2" />
              Check
            </Button>
          </div>

          {searchResult && (
            <div className="mt-4 p-4 border rounded-lg">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-semibold text-lg">{searchResult.plate}</h3>
                  <div className="flex items-center mt-1">
                    {searchResult.status === 'unpaid' ? (
                      <>
                        <XCircle className="h-4 w-4 text-red-500 mr-1" />
                        <Badge variant="destructive">Unpaid Invoice</Badge>
                      </>
                    ) : (
                      <>
                        <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                        <Badge variant="secondary" className="bg-green-100 text-green-800">Clear to Fuel</Badge>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {searchResult.status === 'unpaid' && (
                <div className="space-y-3">
                  <div className="text-sm text-gray-600">
                    <p>Outstanding Amount: <span className="font-semibold">${searchResult.amount}</span></p>
                    <p>Due Date: <span className="font-semibold">{searchResult.dueDate}</span></p>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button variant="destructive" size="sm" className="flex-1">
                      <Shield className="h-4 w-4 mr-1" />
                      Block Fuel
                    </Button>
                    <Button onClick={generatePaymentLink} size="sm" className="flex-1">
                      <QrCode className="h-4 w-4 mr-1" />
                      Payment Link
                    </Button>
                  </div>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardHome;
