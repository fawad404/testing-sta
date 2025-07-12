
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, QrCode } from "lucide-react";

const Invoices = () => {
  const invoices = [
    { id: 'INV-001', plateNo: 'ABC-123', amount: 150, status: 'unpaid', dueDate: '2024-01-20', createdAt: '2024-01-15' },
    { id: 'INV-002', plateNo: 'XYZ-789', amount: 80, status: 'paid', dueDate: '2024-01-19', createdAt: '2024-01-14' },
    { id: 'INV-003', plateNo: 'DEF-456', amount: 200, status: 'pending', dueDate: '2024-01-18', createdAt: '2024-01-13' },
    { id: 'INV-004', plateNo: 'GHI-101', amount: 120, status: 'overdue', dueDate: '2024-01-17', createdAt: '2024-01-12' },
  ];

  const getStatusBadge = (status: string) => {
    const variants: Record<string, { variant: any, className?: string }> = {
      paid: { variant: 'secondary', className: 'bg-green-100 text-green-800' },
      unpaid: { variant: 'destructive' },
      overdue: { variant: 'destructive' },
      pending: { variant: 'outline' },
    };
    
    const config = variants[status] || { variant: 'outline' };
    return <Badge variant={config.variant} className={config.className}>{status}</Badge>;
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold">Invoices</h1>
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
};

export default Invoices;
