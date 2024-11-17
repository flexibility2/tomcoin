import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function BuyTom() {
  return (
    <div className="container mx-auto px-4 py-8 flex-1 flex items-end pb-20">
      <Card className="max-w-2xl mx-auto w-full">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Buy TomCoin</CardTitle>
          <CardDescription>The most adorable meme coin</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <p className="text-yellow-800 font-medium">
                TomCoin is a meme coin with no intrinsic value or expectation of
                financial return. The coin is for entertainment purposes only.
              </p>
              <p className="text-yellow-700 mt-2">Enjoy responsibly!</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
