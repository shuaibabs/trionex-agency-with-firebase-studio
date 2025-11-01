
'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { BarChart, Badge } from 'lucide-react';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from '@/components/ui/chart';
import {
  Bar,
  BarChart as RechartsBarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';

const formSchema = z.object({
  investment: z.coerce.number().min(1, 'Investment must be greater than 0.'),
  revenue: z.coerce.number().min(0, 'Revenue cannot be negative.'),
  cost: z.coerce.number().min(0, 'Costs cannot be negative.'),
});

type FormData = z.infer<typeof formSchema>;

export default function ROICalculatorPage() {
  const [roi, setRoi] = useState<number | null>(null);
  const [chartData, setChartData] = useState<any[]>([]);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      investment: 10000,
      revenue: 50000,
      cost: 20000,
    },
  });

  function onSubmit(values: FormData) {
    const { investment, revenue, cost } = values;
    const netProfit = revenue - cost - investment;
    const calculatedRoi = (netProfit / investment) * 100;
    setRoi(calculatedRoi);

    setChartData([
      { name: 'Investment', value: investment, fill: 'hsl(var(--primary))' },
      { name: 'Revenue', value: revenue, fill: 'hsl(var(--chart-2))' },
      { name: 'Profit', value: netProfit > 0 ? netProfit : 0, fill: 'hsl(var(--chart-1))' },
    ]);
  }

  const chartConfig = {
    value: {
      label: 'Value',
    },
    investment: {
      label: 'Investment',
      color: 'hsl(var(--primary))',
    },
    revenue: {
      label: 'Revenue',
      color: 'hsl(var(--chart-2))',
    },
     profit: {
      label: 'Profit',
      color: 'hsl(var(--chart-1))',
    },
  };

  return (
    <div className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl">
            Marketing ROI Calculator
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Estimate the potential return on your marketing investment with our simple calculator.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Enter Your Metrics</CardTitle>
              <CardDescription>
                Provide your campaign values to calculate ROI.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="investment"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Total Marketing Investment (₹)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="e.g., 10000"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="revenue"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Revenue from Campaign (₹)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="e.g., 50000"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="cost"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Cost of Goods Sold (COGS) (₹)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="e.g., 20000"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full">
                    Calculate ROI
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">
                  Calculated ROI
                </CardTitle>
              </CardHeader>
              <CardContent>
                {roi !== null ? (
                  <p
                    className={`font-bold font-headline text-6xl ${
                      roi >= 0 ? 'text-green-500' : 'text-destructive'
                    }`}
                  >
                    {roi.toFixed(2)}%
                  </p>
                ) : (
                  <p className="text-2xl text-muted-foreground">
                    Results will appear here
                  </p>
                )}
              </CardContent>
              <CardFooter className="flex-col items-center justify-center text-sm text-muted-foreground">
                <p>( (Revenue - COGS - Investment) / Investment ) * 100</p>
              </CardFooter>
            </Card>

            {chartData.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Visual Breakdown</CardTitle>
                </CardHeader>
                <CardContent>
                   <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                      <RechartsBarChart accessibilityLayer data={chartData}>
                        <XAxis
                          dataKey="name"
                          tickLine={false}
                          tickMargin={10}
                          axisLine={false}
                        />
                        <YAxis
                          tickFormatter={(value) => `₹${value / 1000}k`}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="dot" />}
                        />
                         <ChartLegend content={<ChartLegendContent />} />
                        <Bar dataKey="value" radius={4} />
                      </RechartsBarChart>
                    </ChartContainer>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
