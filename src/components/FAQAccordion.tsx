import { motion } from "framer-motion";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { HelpCircle, FileText, Percent, TrendingUp, Wallet, ListChecks, Landmark } from "lucide-react";

export const FAQAccordion = () => {
  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Hal yang Sering Ditanyakan
          </h2>
          <p className="text-lg text-muted-foreground mt-2">
            Informasi lengkap seputar pengajuan KPR, biaya, dan tahapan.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-sm"
        >
          <Accordion type="single" collapsible className="space-y-2">
            <AccordionItem value="requirements" className="rounded-lg overflow-hidden border-border">
              <AccordionTrigger className="px-4 md:px-6 text-foreground">
                <span className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-gold" />
                  Apa saja persyaratan pengajuan KPR?
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-4 md:px-6">
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>WNI dan berdomisili di Indonesia.</li>
                  <li>Karyawan tetap dengan pengalaman kerja minimal 2 tahun.</li>
                  <li>Wiraswasta dengan pengalaman usaha minimal 3 tahun.</li>
                  <li>Profesional dengan pengalaman praktek minimal 2 tahun.</li>
                  <li>Usia minimal 21 tahun saat pembiayaan, maksimal usia pensiun (karyawan) atau 65 tahun (wiraswasta/profesional).</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="documents" className="rounded-lg overflow-hidden border-border">
              <AccordionTrigger className="px-4 md:px-6 text-foreground">
                <span className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-gold" />
                  Berkas apa saja yang diperlukan untuk pengajuan KPR?
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-4 md:px-6">
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Form Aplikasi Kredit.</li>
                  <li>Fotokopi KTP.</li>
                  <li>Kartu Keluarga.</li>
                  <li>Surat Nikah/Cerai.</li>
                  <li>Pas Foto Terbaru Pemohon & Pasangan.</li>
                  <li>Fotokopi Slip Gaji Terakhir atau Surat Keterangan Penghasilan.</li>
                  <li>Fotokopi SK Pengangkatan Pegawai Tetap.</li>
                  <li>Fotokopi Tabungan/Giro minimal 3 bulan terakhir.</li>
                  <li>Fotokopi SPT PPh Pasal 21.</li>
                  <li>Fotokopi NPWP.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="fixed-rate" className="rounded-lg overflow-hidden border-border">
              <AccordionTrigger className="px-4 md:px-6 text-foreground">
                <span className="flex items-center gap-3">
                  <Percent className="w-5 h-5 text-gold" />
                  Apa yang dimaksud dengan suku bunga tetap (fixed rate)?
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-4 md:px-6">
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    Dalam KPR, fixed rate adalah tingkat bunga yang besarnya tetap untuk jangka waktu tertentu.
                  </p>
                  <p>
                    Contoh: program fixed rate 7,5% selama 2 tahun berarti debitur membayar bunga 7,5% tetap dalam 2 tahun pertama.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="floating-rate" className="rounded-lg overflow-hidden border-border">
              <AccordionTrigger className="px-4 md:px-6 text-foreground">
                <span className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-gold" />
                  Apa yang dimaksud dengan suku bunga mengambang (floating rate)?
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-4 md:px-6">
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    Floating rate adalah bunga KPR yang mengacu pada bunga pasar sehingga dapat fluktuatif.
                  </p>
                  <p>
                    Saat kondisi pasar baik (misalnya acuan BI turun), bunga KPR cenderung rendah; sebaliknya saat pasar memburuk, bunga dapat naik. Bank sering mengombinasikan fixed rate dan floating rate dalam program promosi.
                  </p>
                  <p>
                    Review bunga biasanya dilakukan berkala, misalnya setiap 3 atau 6 bulan tergantung kebijakan bank.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="costs" className="rounded-lg overflow-hidden border-border">
              <AccordionTrigger className="px-4 md:px-6 text-foreground">
                <span className="flex items-center gap-3">
                  <Wallet className="w-5 h-5 text-gold" />
                  Biaya apa saja yang dibutuhkan untuk pengajuan KPR?
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-4 md:px-6">
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Biaya appraisal/survey.</li>
                  <li>Biaya notaris (cek sertifikat, perjanjian kredit, balik nama, AJB, APHT, jasa notaris).</li>
                  <li>Biaya provisi bank.</li>
                  <li>Biaya administrasi.</li>
                  <li>Biaya asuransi.</li>
                  <li>Pajak penjual.</li>
                  <li>Pajak pembeli BPHTB.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="stages" className="rounded-lg overflow-hidden border-border">
              <AccordionTrigger className="px-4 md:px-6 text-foreground">
                <span className="flex items-center gap-3">
                  <ListChecks className="w-5 h-5 text-gold" />
                  Apa saja tahapan pengajuan KPR?
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-4 md:px-6">
                <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                  <li>Pilih properti yang akan diajukan/dibeli.</li>
                  <li>Simulasi KPR untuk mengukur kemampuan cicilan.</li>
                  <li>Tentukan bank penyedia layanan KPR.</li>
                  <li>Isi form pemesanan.</li>
                  <li>Bayar booking fee.</li>
                  <li>Pelunasan uang muka.</li>
                  <li>Isi form pengajuan kredit dan siapkan dokumen.</li>
                  <li>Analisa permohonan kredit.</li>
                  <li>Survey appraisal nilai aset oleh bank.</li>
                  <li>Akad kredit di depan notaris dan siapkan biaya KPR/administrasi.</li>
                  <li>Mulai bayar cicilan tiap bulan.</li>
                </ol>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="max-credit" className="rounded-lg overflow-hidden border-border">
              <AccordionTrigger className="px-4 md:px-6 text-foreground">
                <span className="flex items-center gap-3">
                  <Landmark className="w-5 h-5 text-gold" />
                  Berapa maksimum kredit yang bisa diperoleh oleh konsumen?
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-4 md:px-6">
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    Maksimum kredit mengikuti ketentuan pemerintah terkait Rasio Loan to Value (LTV) sesuai Peraturan Bank Indonesia Nomor 17/10/PBI/2015.
                  </p>
                  <p className="font-medium text-foreground">Faktor penentu LTV maksimum:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Tipe luas properti (Tipe ≤21, 22–70, &gt;70, Ruko/Rukan).</li>
                    <li>Jenis properti (Rumah, Rumah Susun/Apartemen, Ruko/Rukan).</li>
                    <li>Tipe pembiayaan (pembiayaan pertama, kedua, ketiga, dst.).</li>
                  </ul>
                  <p>
                    Kombinasi parameter di atas menentukan persentase LTV maksimum yang diberikan kepada nasabah.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
