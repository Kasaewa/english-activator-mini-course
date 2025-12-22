import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="max-w-md mx-auto text-center space-y-8 p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground">
          Oto strona z płatnościami
        </h1>
        
        <Button 
          variant="outline" 
          size="lg" 
          onClick={handleGoBack}
          className="group"
        >
          <ArrowLeft className="mr-2 group-hover:animate-pulse" />
          Wróć
        </Button>
      </div>
    </div>
  );
};

export default Payment;