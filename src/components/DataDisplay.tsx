// src/components/DataDisplay.tsx
import React, { useEffect, useState } from 'react';
import SkeletonLoader from './SkeletonLoader';

interface DataItem {
  id: number;
  title: string;
}

const DataDisplay: React.FC = () => {
  const [data, setData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      // Simulate a network request
      const response = await new Promise<DataItem[]>((resolve) =>
        setTimeout(() => resolve([{ id: 1, title: 'Item 1' }, { id: 2, title: 'Item 2' }]), 10000)
      );
      setData(response);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="p-4">
      {loading ? (
        <div className="space-y-4">
          <SkeletonLoader height="100px" width="100px"/>
          <SkeletonLoader height="100px" width="100px" />
          <SkeletonLoader height="100px" width="100px" />
        </div>
      ) : (
        <ul>
          {data.map(item => (
            <li key={item.id} className="p-2 bg-white rounded shadow mb-2">
              {item.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DataDisplay;
