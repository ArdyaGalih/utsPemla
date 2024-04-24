import { MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="pt-20 bg-slate-800 text-white">
      <div className="container flex flex-col sm:flex-row justify-between gap-6">
        <div>
          <p className="text-lg font-semibold">EState</p>
          <p className="max-w-lg text-slate-300 mt-1">
            A great platform to buy, sell, and rent your properties without any
            agent or commissions.
          </p>
        </div>
        <div>
          <p className="text-lg font-semibold">Contacts</p>
          <address className="text-slate-300 mt-1">
            <MapPin className="inline-block w-5 h-5 mt-0.5" />
            135 Walnut St,
            <br />
            Yet Another City, USA
          </address>
        </div>
      </div>
      <p className="text-center pt-20 pb-4 text-slate-400">
        © 2024 EState. Designed with care by The Brave Coders.
      </p>
    </footer>
  );
}
