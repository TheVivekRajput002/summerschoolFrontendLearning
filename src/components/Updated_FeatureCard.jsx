import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Circle, LogIn } from "lucide-react";

export const Updated_FeatureCard = ({
  isLoggedIn = false
}) => {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate('/login');
  };
  const guestFeatures = [
    "Subscribe to Workshops",
    "Get Reminders",
    "View Workshop Content",
    "Get Top 3 Leaderboard"
  ];

  const userFeatures = [
    "Set Profile",
    "Get Certificates",
    "Get and Submit Assignments",
    "Join Leaderboard",

    ...guestFeatures // All guest features included
  ];

  const currentFeatures = isLoggedIn ? userFeatures : guestFeatures;

  return (
    <div className="mx-auto w-full">
      {/* Status Card */}
      <Card  className="border-2 w-[50%] max-lg:w-[60%] max-md:w-[90%]  mx-auto px-4 py-8">
        <CardHeader className="text-center justify-around items-center pb-4">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Badge variant={isLoggedIn ? "default" : "secondary"} className="text-sm">
              {isLoggedIn ? "Logged In User" : "Guest User"}
            </Badge>
          </div>
          <CardTitle className="text-3xl text-center">
            {isLoggedIn ? "Welcome Back!" : "Join Us Today"}
          </CardTitle>
        </CardHeader>

        <CardContent className="flex flex-col gap-3 justfiy-center items-center">
          {/* Features List */}
          <div className="flex max-sm:flex-col ">

            <div>
              <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-4">
                Available Features
              </h4>

              <div className="flex-col flex justify-start items-start gap-3">
                {currentFeatures.map((feature, index) => (
                  <div key={index} className="flex  gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

            </div>


            {/* Additional Features for Users */}
            {!isLoggedIn && (
              <div className="">
                <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-4">
                  Unlock with Login
                </h4>

                <div className="flex flex-col gap-3">

                  {["Set Profile", "Get Certificates", "Submit Assignments", "Track Progress"].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 opacity-60">
                      <Circle className="h-5 w-5 text-gray-400 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

              </div>
            )}

          </div>


          {/* Login Button */}
          {!isLoggedIn && (
            <div className="pt-4">
              <Button
                onClick={handleLoginRedirect}
                className="w-full flex items-center gap-2"
                size="lg"
              >
                <LogIn className="h-5 w-5" />
                Login to Unlock Features
              </Button>
              <p className="text-xs text-center text-muted-foreground mt-2">
                Login with Google and unlock all features
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};