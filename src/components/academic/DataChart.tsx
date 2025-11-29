import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from "recharts";
import { BarChart3, PieChart as PieChartIcon, TrendingUp } from "lucide-react";

interface BarChartCardProps {
  title: string;
  data: Array<{ name: string; value: number }>;
  dataKey?: string;
}

const COLORS = ['hsl(220, 60%, 25%)', 'hsl(38, 70%, 50%)', 'hsl(220, 50%, 40%)', 'hsl(38, 60%, 65%)', 'hsl(220, 40%, 55%)'];

export function BarChartCard({ title, data, dataKey = "value" }: BarChartCardProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium flex items-center gap-2">
          <BarChart3 className="h-4 w-4 text-accent" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 20%, 88%)" />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} stroke="hsl(220, 15%, 45%)" />
            <YAxis tick={{ fontSize: 12 }} stroke="hsl(220, 15%, 45%)" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(0, 0%, 100%)', 
                border: '1px solid hsl(220, 20%, 88%)',
                borderRadius: '8px'
              }}
            />
            <Bar dataKey={dataKey} fill="hsl(220, 60%, 25%)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

interface PieChartCardProps {
  title: string;
  data: Array<{ name: string; value: number }>;
}

export function PieChartCard({ title, data }: PieChartCardProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium flex items-center gap-2">
          <PieChartIcon className="h-4 w-4 text-accent" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={2}
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              labelLine={false}
            >
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

interface LineChartCardProps {
  title: string;
  data: Array<{ name: string; value: number; value2?: number }>;
}

export function LineChartCard({ title, data }: LineChartCardProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium flex items-center gap-2">
          <TrendingUp className="h-4 w-4 text-accent" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 20%, 88%)" />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} stroke="hsl(220, 15%, 45%)" />
            <YAxis tick={{ fontSize: 12 }} stroke="hsl(220, 15%, 45%)" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(0, 0%, 100%)', 
                border: '1px solid hsl(220, 20%, 88%)',
                borderRadius: '8px'
              }}
            />
            <Line type="monotone" dataKey="value" stroke="hsl(220, 60%, 25%)" strokeWidth={2} dot={{ fill: 'hsl(220, 60%, 25%)' }} />
            {data[0]?.value2 !== undefined && (
              <Line type="monotone" dataKey="value2" stroke="hsl(38, 70%, 50%)" strokeWidth={2} dot={{ fill: 'hsl(38, 70%, 50%)' }} />
            )}
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
