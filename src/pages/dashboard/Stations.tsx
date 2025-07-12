
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus } from "lucide-react";

const Stations = () => {
  const stats = {
    totalStations: 3,
  };

  const stations = [
    { id: 1, name: 'Main Station', location: 'Downtown', attendants: 3, status: 'active' },
    { id: 2, name: 'Highway Station', location: 'Highway 101', attendants: 2, status: 'active' },
    { id: 3, name: 'North Station', location: 'North District', attendants: 3, status: 'maintenance' },
  ];

  const getStatusBadge = (status: string) => {
    const variants: Record<string, { variant: any, className?: string }> = {
      active: { variant: 'secondary', className: 'bg-green-100 text-green-800' },
      maintenance: { variant: 'outline', className: 'bg-orange-100 text-orange-800' }
    };
    
    const config = variants[status] || { variant: 'outline' };
    return <Badge variant={config.variant} className={config.className}>{status}</Badge>;
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold">Stations</h1>
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
};

export default Stations;
