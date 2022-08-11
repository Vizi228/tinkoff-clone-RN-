import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { ICurrency } from './types';

export const useCurrencies = () => {
  const [currencies, setCurrencies] = useState<ICurrency[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.currencyapi.com/v3/latest?apikey=EQMsMrQUOiRl0FbR6p7ZBhVLkrohJZ7IClrLvD3s&base_currency=UAH',
        );
        const result = await response.json();
        const data = [
          {
            name: 'USD',
            value: (1 / result.data.USD.value).toFixed(2),
          },
          {
            name: 'EUR',
            value: (1 / result.data.EUR.value).toFixed(2),
          },
          {
            name: 'GBP',
            value: (1 / result.data.GBP.value).toFixed(2),
          },
        ] as ICurrency[];
        setCurrencies(data);
      } catch (error: any) {
        Alert.alert('Fetch currencies', error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return { currencies, isLoading };
};
