
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  Fuel, 
  Car, 
  DollarSign, 
  AlertTriangle, 
  Users, 
  Search,
  Plus,
  Settings,
  Bell,
  LogOut,
  BarChart3,
  Shield,
  QrCode,
  CheckCircle,
  XCircle,
  Calendar,
  Clock,
  Building,
  FileText,
  UserPlus
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [plateNumber, setPlateNumber] = useState('');
  const [searchResult, setSearchResult] = useState<any>(null);

  // Mock data
  const stats = {
    totalInvoices: 150,
    unpaidInvoices: 22,
    blockedToday: 6,
    totalRevenue: 45230,
    totalVehicles: 342,
    totalStations: 3,
    totalAttendants: 8
  };

  const vehicles = [
    { plateNo: 'ABC-123', status: 'blocked', lastInvoice: '2024-01-15', total: 150 },
    { plateNo: 'XYZ-789', status: 'active', lastInvoice: '2024-01-14', total: 80 },
    { plateNo: 'DEF-456', status: 'pending', lastInvoice: '2024-01-13', total: 200 },
    { plateNo: 'GHI-101', status: 'blocked', lastInvoice: '2024-01-12', total: 120 },
    { plateNo: 'JKL-202', status: 'active', lastInvoice: '2024-01-11', total: 95 },
  ];

  const invoices = [
    { id: 'INV-001', plateNo: 'ABC-123', amount: 150, status: 'unpaid', dueDate: '2024-01-20', createdAt: '2024-01-15' },
    { id: 'INV-002', plateNo: 'XYZ-789', amount: 80, status: 'paid', dueDate: '2024-01-19', createdAt: '2024-01-14' },
    { id: 'INV-003', plateNo: 'DEF-456', amount: 200, status: 'pending', dueDate: '2024-01-18', createdAt: '2024-01-13' },
    { id: 'INV-004', plateNo: 'GHI-101', amount: 120, status: 'overdue', dueDate: '2024-01-17', createdAt: '2024-01-12' },
  ];

  const stations = [
    { id: 1, name: 'Main Station', location: 'Downtown', attendants: 3, status: 'active' },
    { id: 2, name: 'Highway Station', location: 'Highway 101', attendants: 2, status: 'active' },
    { id: 3, name: 'North Station', location: 'North District', attendants: 3, status: 'maintenance' },
  ];

  const attendants = [
    { id: 1, name: 'John Doe', email: 'john@example.com', station: 'Main Station', blockedVehicles: 12, lastActive: '2 mins ago' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', station: 'Highway Station', blockedVehicles: 8, lastActive: '1 hour ago' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', station: 'Main Station', blockedVehicles: 15, lastActive: '30 mins ago' },
    { id: 4, name: 'Sarah Wilson', email: 'sarah@example.com', station: 'North Station', blockedVehicles: 5, lastActive: '5 hours ago' },
  ];

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'vehicles', label: 'Vehicles', icon: Car },
    { id: 'invoices', label: 'Invoices', icon: FileText },
    { id: 'stations', label: 'Stations', icon: Building },
    { id: 'attendants', label: 'Attendants', icon: Users },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

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

  const getStatusBadge = (status: string) => {
    const variants: Record<string, { variant: any, className?: string }> = {
      active: { variant: 'secondary', className: 'bg-green-100 text-green-800' },
      blocked: { variant: 'destructive' },
      pending: { variant: 'outline' },
      paid: { variant: 'secondary', className: 'bg-green-100 text-green-800' },
      unpaid: { variant: 'destructive' },
      overdue: { variant: 'destructive' },
      maintenance: { variant: 'outline', className: 'bg-orange-100 text-orange-800' }
    };
    
    const config = variants[status] || { variant: 'outline' };
    return <Badge variant={config.variant} className={config.className}>{status}</Badge>;
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return (
          <div className="space-y-6">
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

      case 'vehicles':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">Vehicles</h2>
                <p className="text-gray-600">Manage your registered vehicles</p>
              </div>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Vehicle
              </Button>
            </div>

            {/* Vehicle Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Total Vehicles</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.totalVehicles}</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Blocked Today</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-red-600">{stats.blockedToday}</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Active Vehicles</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">{stats.totalVehicles - stats.blockedToday}</div>
                </CardContent>
              </Card>
            </div>

            {/* Vehicles Table */}
            <Card>
              <CardHeader>
                <CardTitle>Vehicle List</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Plate No</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Last Invoice</TableHead>
                        <TableHead>Total</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {vehicles.map((vehicle) => (
                        <TableRow key={vehicle.plateNo}>
                          <TableCell className="font-medium">{vehicle.plateNo}</TableCell>
                          <TableCell>{getStatusBadge(vehicle.status)}</TableCell>
                          <TableCell>{vehicle.lastInvoice}</TableCell>
                          <TableCell>${vehicle.total}</TableCell>
                          <TableCell>
                            <Button variant="outline" size="sm">View</Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'invoices':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">Invoices</h2>
                <p className="text-gray-600">Manage fuel invoices and payments</p>
              </div>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Create Invoice
              </Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Invoice List</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Invoice ID</TableHead>
                        <TableHead>Plate No</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Due Date</TableHead>
                        <TableHead>Created</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {invoices.map((invoice) => (
                        <TableRow key={invoice.id}>
                          <TableCell className="font-medium">{invoice.id}</TableCell>
                          <TableCell>{invoice.plateNo}</TableCell>
                          <TableCell>${invoice.amount}</TableCell>
                          <TableCell>{getStatusBadge(invoice.status)}</TableCell>
                          <TableCell>{invoice.dueDate}</TableCell>
                          <TableCell>{invoice.createdAt}</TableCell>
                          <TableCell>
                            <div className="flex space-x-1">
                              <Button variant="outline" size="sm">View</Button>
                              <Button variant="outline" size="sm">
                                <QrCode className="h-3 w-3" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'stations':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">Stations</h2>
                <p className="text-gray-600">Manage your fuel stations</p>
              </div>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Station
              </Button>
            </div>

            {/* Station Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Total Stations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.totalStations}</div>
                  <p className="text-xs text-muted-foreground">Pro Plan: Up to 5 stations</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Active Stations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">2</div>
                  <p className="text-xs text-muted-foreground">1 under maintenance</p>
                </CardContent>
              </Card>
            </div>

            {/* Stations Table */}
            <Card>
              <CardHeader>
                <CardTitle>Station List</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Station Name</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead>Attendants</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {stations.map((station) => (
                        <TableRow key={station.id}>
                          <TableCell className="font-medium">{station.name}</TableCell>
                          <TableCell>{station.location}</TableCell>
                          <TableCell>{station.attendants}</TableCell>
                          <TableCell>{getStatusBadge(station.status)}</TableCell>
                          <TableCell>
                            <div className="flex space-x-1">
                              <Button variant="outline" size="sm">Edit</Button>
                              <Button variant="outline" size="sm">Settings</Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'attendants':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">Attendants</h2>
                <p className="text-gray-600">Manage fuel station attendants</p>
              </div>
              <Button>
                <UserPlus className="h-4 w-4 mr-2" />
                Invite Attendant
              </Button>
            </div>

            {/* Attendant Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Total Attendants</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.totalAttendants}</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Active Now</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">5</div>
                  <p className="text-xs text-muted-foreground">3 offline</p>
                </CardContent>
              </Card>
            </div>

            {/* Attendants Table */}
            <Card>
              <CardHeader>
                <CardTitle>Attendant List</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Station</TableHead>
                        <TableHead>Blocked Vehicles</TableHead>
                        <TableHead>Last Active</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {attendants.map((attendant) => (
                        <TableRow key={attendant.id}>
                          <TableCell className="font-medium">{attendant.name}</TableCell>
                          <TableCell>{attendant.email}</TableCell>
                          <TableCell>{attendant.station}</TableCell>
                          <TableCell>
                            <Badge variant="outline">{attendant.blockedVehicles}</Badge>
                          </TableCell>
                          <TableCell>{attendant.lastActive}</TableCell>
                          <TableCell>
                            <div className="flex space-x-1">
                              <Button variant="outline" size="sm">Edit</Button>
                              <Button variant="outline" size="sm">Remove</Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'settings':
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold">Settings</h2>
              <p className="text-gray-600">Manage your account and preferences</p>
            </div>

            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Station Information</CardTitle>
                  <CardDescription>Update your station details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">Station Name</label>
                      <Input placeholder="Main Fuel Station" className="mt-1" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Contact Email</label>
                      <Input placeholder="station@example.com" className="mt-1" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Phone Number</label>
                      <Input placeholder="+1 (555) 123-4567" className="mt-1" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Address</label>
                      <Input placeholder="123 Main Street" className="mt-1" />
                    </div>
                  </div>
                  <Button>Save Changes</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Subscription Plan</CardTitle>
                  <CardDescription>Manage your subscription and billing</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-semibold">Pro Plan</h3>
                      <p className="text-sm text-gray-600">$99/month • Up to 5 stations</p>
                    </div>
                    <Button variant="outline">Upgrade Plan</Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Notification Settings</CardTitle>
                  <CardDescription>Configure your alert preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Email Notifications</p>
                      <p className="text-sm text-gray-600">Receive alerts via email</p>
                    </div>
                    <Button variant="outline" size="sm">Configure</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">SMS Alerts</p>
                      <p className="text-sm text-gray-600">Get SMS for urgent issues</p>
                    </div>
                    <Button variant="outline" size="sm">Configure</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
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
        {/* Sidebar */}
        <div className="w-64 bg-white border-r border-gray-200 min-h-screen sticky top-16">
          <nav className="p-4 space-y-2">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center px-3 py-2 text-left rounded-lg transition-colors ${
                    isActive 
                      ? 'bg-blue-50 text-blue-700 border border-blue-200' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Icon className={`h-5 w-5 mr-3 ${isActive ? 'text-blue-600' : 'text-gray-400'}`} />
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 overflow-auto">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
