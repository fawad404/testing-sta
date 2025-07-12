
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Settings = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Settings</h1>
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
};

export default Settings;
