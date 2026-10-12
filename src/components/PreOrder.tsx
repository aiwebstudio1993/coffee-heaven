import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Minus, Plus, ShoppingBag, Lock, Check, X, CalendarDays } from 'lucide-react';

/*
 * Pre-order with online deposit.
 *
 * HOW TO GO LIVE FOR A CLIENT:
 * 1. In the client's own Stripe account: Payment Links -> New -> product "Order deposit", price = DEPOSIT (e.g. £10).
 * 2. Paste that link below as STRIPE_DEPOSIT_LINK.
 * While the link is empty the site runs in DEMO mode: no card details are asked for and no money is taken.
 */
const STRIPE_DEPOSIT_LINK = '';
const DEPOSIT = 10;
const MIN_NOTICE_DAYS = 2;

const ITEMS = [
  { id: 'cake', name: 'Celebration Cake (8")', desc: 'Sponge of your choice, buttercream & personalised topper', price: 35 },
  { id: 'brownies', name: 'Brownie Box (6)', desc: 'Triple chocolate, salted caramel & biscoff mix', price: 15 },
  { id: 'cupcakes', name: 'Cupcake Box (6)', desc: 'Vanilla, chocolate & red velvet', price: 14 },
  { id: 'cookies', name: 'Stuffed Cookie Box (4)', desc: 'Nutella, pistachio, biscoff & white choc', price: 16 },
  { id: 'tea', name: 'Afternoon Tea for Two (to go)', desc: 'Sandwiches, scones, cakes & two drinks', price: 30 },
];

const gbp = (n: number) => '£' + n.toFixed(2);

function minDate() {
  const d = new Date();
  d.setDate(d.getDate() + MIN_NOTICE_DAYS);
  return d.toISOString().slice(0, 10);
}

export default function PreOrder() {
  const [qty, setQty] = useState<Record<string, number>>({});
  const [form, setForm] = useState({ name: '', email: '', phone: '', date: '', notes: '' });
  const [error, setError] = useState('');
  const [step, setStep] = useState<'form' | 'checkout' | 'paid'>('form');
  const [ref, setRef] = useState('');

  const total = useMemo(
    () => ITEMS.reduce((sum, i) => sum + (qty[i.id] || 0) * i.price, 0),
    [qty]
  );
  const itemCount = Object.values(qty).reduce((a, b) => a + b, 0);
  const deposit = Math.min(DEPOSIT, total);
  const balance = total - deposit;

  const change = (id: string, d: number) =>
    setQty((q) => ({ ...q, [id]: Math.max(0, Math.min(10, (q[id] || 0) + d)) }));

  const onField = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setError('');
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (itemCount === 0) return setError('Add at least one item to your order.');
    if (!form.name || !form.email || !form.phone || !form.date)
      return setError('Please fill in your name, email, phone and collection date.');
    if (form.date < minDate())
      return setError(`Please give us at least ${MIN_NOTICE_DAYS} days' notice.`);

    const orderRef = 'CH-' + Math.floor(100000 + Math.random() * 900000);
    setRef(orderRef);

    if (STRIPE_DEPOSIT_LINK) {
      const url = new URL(STRIPE_DEPOSIT_LINK);
      url.searchParams.set('prefilled_email', form.email);
      url.searchParams.set('client_reference_id', orderRef);
      window.location.href = url.toString();
      return;
    }
    setStep('checkout');
  };

  const reset = () => {
    setQty({});
    setForm({ name: '', email: '', phone: '', date: '', notes: '' });
    setStep('form');
  };

  const orderLines = ITEMS.filter((i) => qty[i.id]);

  return (
    <section id="pre-order" className="py-24 bg-white relative overflow-hidden scroll-mt-24 sm:scroll-mt-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase font-semibold tracking-widest text-copper">Cakes & Treat Boxes</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-walnut mt-2 mb-4 leading-tight">
            Pre-Order Online
          </h2>
          <p className="text-charcoal/70 font-light text-sm">
            Choose your treats, pick a collection date and secure your order with a {gbp(DEPOSIT)} deposit.
            Pay the rest when you collect.
          </p>
          <div className="w-16 h-1 bg-copper mx-auto mt-4 rounded-full" />
        </div>

        {step === 'paid' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-xl mx-auto bg-cream rounded-3xl border border-sage/30 p-8 text-center shadow-lg"
          >
            <div className="w-14 h-14 mx-auto rounded-full bg-sage text-white flex items-center justify-center mb-4">
              <Check className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-walnut mb-2">Order confirmed</h3>
            <p className="text-sm text-charcoal/70 mb-6">
              Thanks {form.name.split(' ')[0]}! Your deposit of {gbp(deposit)} has been received.
            </p>
            <div className="bg-white rounded-2xl p-5 text-left text-sm space-y-2 mb-6">
              <div className="flex justify-between"><span className="text-charcoal/60">Order ref</span><span className="font-semibold">{ref}</span></div>
              <div className="flex justify-between"><span className="text-charcoal/60">Collection</span><span className="font-semibold">{new Date(form.date).toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'long' })}</span></div>
              {orderLines.map((i) => (
                <div key={i.id} className="flex justify-between"><span>{qty[i.id]} × {i.name}</span><span>{gbp(qty[i.id] * i.price)}</span></div>
              ))}
              <div className="border-t border-beige pt-2 flex justify-between"><span>Deposit paid</span><span>{gbp(deposit)}</span></div>
              <div className="flex justify-between font-semibold text-walnut"><span>Due on collection</span><span>{gbp(balance)}</span></div>
            </div>
            <button onClick={reset} className="text-sm font-semibold text-copper hover:underline">Place another order</button>
          </motion.div>
        ) : (
          <form onSubmit={submit} className="grid lg:grid-cols-5 gap-8">
            {/* Items */}
            <div className="lg:col-span-3 space-y-3">
              {ITEMS.map((i) => (
                <div key={i.id} className="flex items-center gap-4 bg-cream rounded-2xl p-4 border border-beige">
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-walnut">{i.name}</div>
                    <div className="text-xs text-charcoal/60">{i.desc}</div>
                    <div className="text-sm font-semibold text-copper mt-1">{gbp(i.price)}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button type="button" aria-label={`Remove one ${i.name}`} onClick={() => change(i.id, -1)}
                      className="w-9 h-9 rounded-full border border-beige bg-white flex items-center justify-center hover:border-copper">
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-6 text-center font-semibold">{qty[i.id] || 0}</span>
                    <button type="button" aria-label={`Add one ${i.name}`} onClick={() => change(i.id, 1)}
                      className="w-9 h-9 rounded-full bg-walnut text-white flex items-center justify-center hover:bg-copper">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Details + summary */}
            <div className="lg:col-span-2 bg-cream rounded-3xl p-6 border border-beige space-y-3 h-fit">
              <div className="flex items-center gap-2 font-serif text-xl font-bold text-walnut">
                <ShoppingBag className="w-5 h-5 text-copper" /> Your order
              </div>
              <input name="name" value={form.name} onChange={onField} placeholder="Full name *" className="w-full rounded-xl border border-beige bg-white px-4 py-3 text-sm" />
              <input name="email" type="email" value={form.email} onChange={onField} placeholder="Email *" className="w-full rounded-xl border border-beige bg-white px-4 py-3 text-sm" />
              <input name="phone" type="tel" value={form.phone} onChange={onField} placeholder="Phone *" className="w-full rounded-xl border border-beige bg-white px-4 py-3 text-sm" />
              <label className="block text-xs font-semibold text-charcoal/70">
                <span className="flex items-center gap-1 mb-1"><CalendarDays className="w-3.5 h-3.5" /> Collection date *</span>
                <input name="date" type="date" min={minDate()} value={form.date} onChange={onField} className="w-full rounded-xl border border-beige bg-white px-4 py-3 text-sm font-normal" />
              </label>
              <textarea name="notes" value={form.notes} onChange={onField} rows={2} placeholder="Message on cake, allergies, flavours…" className="w-full rounded-xl border border-beige bg-white px-4 py-3 text-sm" />

              <div className="border-t border-beige pt-3 text-sm space-y-1">
                <div className="flex justify-between"><span>Order total</span><span className="font-semibold">{gbp(total)}</span></div>
                <div className="flex justify-between text-copper font-semibold"><span>Deposit today</span><span>{gbp(deposit)}</span></div>
                <div className="flex justify-between text-charcoal/60"><span>Pay on collection</span><span>{gbp(balance)}</span></div>
              </div>

              {error && <p className="text-xs text-red-600">{error}</p>}

              <button type="submit" className="w-full rounded-full bg-walnut hover:bg-copper text-white font-semibold py-3.5 flex items-center justify-center gap-2 transition-colors">
                <Lock className="w-4 h-4" /> Pay {gbp(deposit || DEPOSIT)} deposit
              </button>
              <p className="text-[11px] text-center text-charcoal/50">Secure payment by Stripe · {MIN_NOTICE_DAYS} days' notice needed</p>
            </div>
          </form>
        )}
      </div>

      {/* Demo checkout (only shown when no Stripe link is set) */}
      <AnimatePresence>
        {step === 'checkout' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
            <motion.div initial={{ y: 20 }} animate={{ y: 0 }} className="bg-white rounded-2xl w-full max-w-sm shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 border-b">
                <span className="font-semibold text-sm">Coffee Heaven · Order deposit</span>
                <button onClick={() => setStep('form')} aria-label="Close"><X className="w-4 h-4" /></button>
              </div>
              <div className="p-5 space-y-4">
                <div className="text-3xl font-bold">{gbp(deposit)}</div>
                <div className="text-xs text-charcoal/60">Order {ref} · {form.email}</div>
                <div className="rounded-xl bg-amber-50 border border-amber-200 p-3 text-xs text-amber-800">
                  Demo checkout: no card details are taken and no money is charged. On a live site this step is a secure Stripe payment page.
                </div>
                <button onClick={() => setStep('paid')} className="w-full rounded-lg bg-[#635BFF] hover:bg-[#5146ff] text-white font-semibold py-3 flex items-center justify-center gap-2">
                  <Lock className="w-4 h-4" /> Pay {gbp(deposit)} (demo)
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
