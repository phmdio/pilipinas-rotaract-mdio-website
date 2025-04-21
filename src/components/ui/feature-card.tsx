import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export interface FeatureCardProps {
  id: string;
  image: string;
  color: string;
  title?: string;
  subtitle?: string;
  description?: string;
  summary?: string;
  buttonText?: string;
  linkPath?: string;
}

const FeatureCard = ({
  id,
  image,
  color,
  title = 'Rotaract Clubs of Rotary',
  subtitle = 'International District #',
  description = '',
  summary = 'Discover the vibrant community of Rotaract clubs in this district, where young professionals develop leadership skills and implement innovative service projects addressing local needs. Join us in making a positive impact through fellowship, professional development, and community service.',
  buttonText = 'LEARN MORE',
  linkPath = `/district/${id}`
}: FeatureCardProps) => {
  return (
    <div className="overflow-hidden flex flex-col h-[500px]">
      <div 
        className="relative h-[350px] bg-cover bg-center" 
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-x-0 bottom-0 h-16 bg-black/50 flex items-center justify-between px-5">
          <div className="text-white">
            <p className="font-medium">{title}</p>
            <p className="font-medium">{subtitle}</p>
          </div>
          <div className="text-white text-5xl font-bold">
            {id}
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-white/30"></div>
      <div 
        style={{ backgroundColor: color }}
        className="p-6 text-white flex-grow flex flex-col"
      >
        <p className="mb-5">
          {summary}
        </p>
        <div className="mt-auto flex flex-col justify-center">
          <Link to={linkPath}>
            <Button 
              variant="outline" 
              className="text-white border-white hover:bg-white/20 w-full py-2 rounded-full bg-transparent text-center"
            >
              {buttonText}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard; 