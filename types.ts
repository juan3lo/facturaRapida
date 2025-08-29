
import type React from 'react';

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface PricingPlan {
  name: string;
  folios: number;
  price: number;
  pricePerFolio: number;
  popular?: boolean;
}
