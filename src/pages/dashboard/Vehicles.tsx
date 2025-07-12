
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus } from "lucide-react";

const Vehicles = () => {
  const stats = {
    totalVehicles: 342,
    blockedToday: 6,
  };

  const vehicles = [
    { plateNo: 'ABC-123', status: 'blocked', lastInvoice: '2024-01-15', total: 150 },
    { plateNo: 'XYZ-789', status: 'active', lastInvoice: '2024-01-14', total: 80 },
    { plateNo: 'DEF-456', status: 'pending', lastInvoice: '2024-01-13', total: 200 },
    { plateNo: 'GHI-101', status: 'blocked', lastInvoice: '2024-01-12', total: 120 },
    { plateNo: 'JKL-202', status: 'active', lastInvoice: '2024-01-11', total: 95 },
  ];

  const getStatusBadge = (status: string) => {
    const variants: Record<string, { variant: any, className?: string }> = {
      active: { variant: 'secondary', className: 'bg-green-100 text-green-800' },
      blocked: { variant: 'destructive' },
      pending: { variant: 'outline' },
    };
    
    const config = variants[status] || { variant: 'outline' };
    return <Badge variant={config.variant} className={config.className}>{status}</Badge>;
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold">Vehicles</h1>
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
};

export default Vehicles;
