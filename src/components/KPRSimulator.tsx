import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { CheckCircle, Gauge, Percent, FileCheck, ClipboardList, Handshake } from "lucide-react";

const formatIDR = (n: number) => `Rp ${Math.round(n).toLocaleString("id-ID")}`;

export const KPRSimulator = () => {
  // Defaults modeled on screenshot
  const [harga, setHarga] = useState<number>(350_000_000);
  const [dp, setDp] = useState<number>(35_000_000); // 10%
  const [bunga, setBunga] = useState<number>(6.5); // annual %
  const [tenor, setTenor] = useState<number>(15); // years

  const pinjaman = useMemo(() => Math.max(harga - dp, 0), [harga, dp]);
  const n = useMemo(() => tenor * 12, [tenor]);
  const r = useMemo(() => bunga / 100 / 12, [bunga]);

  const cicilanPerBulan = useMemo(() => {
    if (r === 0 || n === 0) return pinjaman / (n || 1);
    const denom = 1 - Math.pow(1 + r, -n);
    return pinjaman * r / (denom || 1);
  }, [pinjaman, r, n]);

  const totalPembayaran = useMemo(() => cicilanPerBulan * n, [cicilanPerBulan, n]);
  const totalBunga = useMemo(() => totalPembayaran - pinjaman, [totalPembayaran, pinjaman]);

  const dpMax = Math.round(harga * 0.5);

  return (
    <section id="kpr-sim" className="container mx-auto px-4 md:px-6 py-12">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl font-bold text-white mb-6"
      >
        Simulasi KPR
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Simulator Card */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="glass p-4 md:p-6 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <Gauge className="w-5 h-5 text-gold" />
              <h3 className="text-lg md:text-xl font-semibold text-foreground">Simulasi KPR</h3>
            </div>

            {/* Harga Rumah */}
            <div className="mb-4">
              <Label className="text-foreground">Harga Rumah</Label>
              <div className="flex items-center justify-between text-xs text-muted-foreground mt-1">
                <span>300 Jt</span>
                <span>1 M</span>
              </div>
              <Slider
                value={[harga]}
                min={300_000_000}
                max={1_000_000_000}
                step={1_000_000}
                onValueChange={(v) => setHarga(v[0])}
                className="mt-2"
              />
              <div className="mt-1 text-right text-sm text-primary">{formatIDR(harga)}</div>
            </div>

            {/* DP Rupiah */}
            <div className="mb-4">
              <div className="flex items-center justify-between">
                <Label className="text-foreground">Uang Muka (DP)</Label>
                <span className="text-xs text-muted-foreground">{Math.round((dp / harga) * 100)}%</span>
              </div>
              <Slider
                value={[dp]}
                min={0}
                max={dpMax}
                step={500_000}
                onValueChange={(v) => setDp(v[0])}
                className="mt-2"
              />
              <div className="mt-1 text-right text-sm text-green-600">{formatIDR(dp)}</div>
            </div>

            {/* Bunga & Tenor */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div>
                <Label className="text-foreground">Suku Bunga (%)</Label>
                <Input
                  type="number"
                  step="0.1"
                  value={bunga}
                  onChange={(e) => setBunga(parseFloat(e.target.value) || 0)}
                  className="mt-2"
                />
              </div>
              <div>
                <Label className="text-foreground">Tenor (Tahun)</Label>
                <Select value={String(tenor)} onValueChange={(v) => setTenor(parseInt(v))}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Pilih tenor" />
                  </SelectTrigger>
                  <SelectContent>
                    {[5, 10, 15, 20].map((t) => (
                      <SelectItem key={t} value={String(t)}>{t} Tahun</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Hasil Simulasi */}
            <div className="mt-2 rounded-xl bg-primary/10 p-4">
              <h4 className="font-semibold text-foreground">Hasil Simulasi</h4>
              <div className="mt-3 space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Cicilan per Bulan</span>
                  <span className="font-bold text-primary">{formatIDR(cicilanPerBulan)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Total Pembayaran</span>
                  <span className="font-semibold">{formatIDR(totalPembayaran)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Total Bunga</span>
                  <span className="font-semibold">{formatIDR(totalBunga)}</span>
                </div>
              </div>

              <Button
                className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white"
                onClick={() => window.open("https://wa.me/6289649931253?text=Halo%20Admin,%20saya%20ingin%20konsultasi%20KPR.", "_blank")}
              >
                Konsultasi KPR via WhatsApp
              </Button>
            </div>
          </Card>
        </motion.div>

        {/* Right column */}
        <div className="grid gap-6">
          {/* Keunggulan KPR Kami */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="glass rounded-2xl p-4 md:p-6">
              <div className="flex items-center gap-3 mb-2">
                <Percent className="w-5 h-5 text-gold" />
                <h3 className="text-lg md:text-xl font-semibold text-foreground">Keunggulan KPR Kami</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-6 text-sm">
                {[
                  "DP mulai dari 0%",
                  "Tenor hingga 25 tahun",
                  "Bantuan lengkap dari konsultan",
                  "Bunga kompetitif mulai 6%",
                  "Proses cepat 1-2 minggu",
                  "Bebas biaya admin & provisi",
                ].map((t) => (
                  <div key={t} className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Proses KPR */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="glass rounded-2xl p-4 md:p-6">
              <div className="flex items-center gap-3 mb-3">
                <FileCheck className="w-5 h-5 text-gold" />
                <h3 className="text-lg md:text-xl font-semibold text-foreground">Proses KPR</h3>
              </div>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <ClipboardList className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Konsultasi & Survey</p>
                    <p className="text-muted-foreground">Tim kami akan membantu konsultasi kebutuhan dan survey lokasi.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileCheck className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Pengajuan KPR</p>
                    <p className="text-muted-foreground">Proses pengajuan KPR ke bank partner dengan persyaratan mudah.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Handshake className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Persetujuan & Akad</p>
                    <p className="text-muted-foreground">Setelah disetujui, proses akad kredit dan serah terima unit.</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};