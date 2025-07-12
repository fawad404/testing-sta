
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { UserPlus } from "lucide-react";

const Attendants = () => {
  const stats = {
    totalAttendants: 8,
  };

  const attendants = [
    { id: 1, name: 'John Doe', email: 'john@example.com', station: 'Main Station', blockedVehicles: 12, lastActive: '2 mins ago' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', station: 'Highway Station', blockedVehicles: 8, lastActive: '1 hour ago' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', station: 'Main Station', blockedVehicles: 15, lastActive: '30 mins ago' },
    { id: 4, name: 'Sarah Wilson', email: 'sarah@example.com', station: 'North Station', blockedVehicles: 5, lastActive: '5 hours ago' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold">Attendants</h1>
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
};

export default Attendants;
