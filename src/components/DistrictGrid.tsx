import FeatureCard, { FeatureCardProps } from './ui/feature-card';

interface DistrictGridProps {
  districts: Array<{
    id: string;
    image: string;
    color: string;
    description?: string;
    summary?: string;
  }>;
  className?: string;
}

const DistrictGrid = ({ districts, className = '' }: DistrictGridProps) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${className}`}>
      {districts.map((district) => (
        <FeatureCard
          key={district.id}
          id={district.id}
          image={district.image}
          color={district.color}
          summary={district.summary}
          title="Rotaract Clubs of Rotary"
          subtitle="International District #"
          buttonText="LEARN MORE"
          linkPath={`/district/${district.id}`}
        />
      ))}
    </div>
  );
};

export default DistrictGrid; 