"use client"
import SessionFrequency from './session-frequency'
import Header from './header'

export default function ConfirmSession() {
  const [paymentMethod, setPaymentMethod] = useState('card') // 'card' | 'paypal'
  const [cardNumber, setCardNumber] = useState('')
  const [expiry, setExpiry] = useState('')
  const [cvv, setCvv] = useState('')
  const [cardName, setCardName] = useState('')
  const [saveCard, setSaveCard] = useState(false)
  const [appliedOccurrences, setAppliedOccurrences] = useState([])

  // format card number with spaces
  function formatCard(value) {
    return value.replace(/\D/g, '').substring(0,16).replace(/(.{4})/g, '$1 ').trim()
  }
  function handleCardChange(e) {
    setCardNumber(formatCard(e.target.value))
  }
  function handleExpiryChange(e) {
    // allow MM/YY or MM/YY with slash
    const raw = e.target.value.replace(/[^\d]/g,'').substring(0,4)
    if (raw.length >= 3) {
      setExpiry(raw.substring(0,2) + '/' + raw.substring(2))
    } else {
      setExpiry(raw)
    }
  }
  function handleCvv(e) {
    setCvv(e.target.value.replace(/\D/g,'').substring(0,4))
  }

  function validateCard() {
    if (paymentMethod === 'paypal') return true
    // simple validations
    const digits = cardNumber.replace(/\s/g,'')
    if (digits.length < 13) { alert('Card number seems too short'); return false }
    if (!expiry || expiry.length < 4) { alert('Enter expiry in MM/YY'); return false }
    if (!cvv || cvv.length < 3) { alert('Enter CVV'); return false }
    if (!cardName) { alert('Enter cardholder name'); return false }
    return true
  }

  function onPayNow(e) {
    e?.preventDefault()
    if (!validateCard()) return
    // Replace with your payment API integration
    const payload = {
      method: paymentMethod,
      card: paymentMethod === 'card' ? { number: cardNumber, expiry, cvv, name: cardName, saveCard } : null,
      occurrences: appliedOccurrences
    }
    console.log('PAYLOAD', payload)
    alert('Payment successful (demo). Check console for payload.')
    // reset sensitive fields on success
    setCardNumber(''); setExpiry(''); setCvv(''); setCardName(''); setSaveCard(false)
  }

  return (
    <div>
      <Header />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT COLUMN */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg border p-4 shadow-sm">
            <button className="text-sm text-gray-600 mb-2">← Confirm Session</button>
            <h2 className="text-lg font-semibold mb-1">Booking Summary</h2>
            <p className="small-caption mb-3">Review your session booking</p>

            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="text-gray-600">Tutor</div>
              <div className="font-medium">Dr. Sarah Johnson</div>

              <div className="text-gray-600">Subject</div>
              <div className="font-medium">Mathematics</div>

              <div className="text-gray-600">Topic</div>
              <div className="font-medium">Algebra</div>

              <div className="text-gray-600">Schedule</div>
              <div className="font-medium"><span className="bg-green-50 text-green-700 px-2 py-1 rounded text-xs">MON 8 - 9 PM</span></div>

              <div className="text-gray-600">Sessions</div>
              <div className="font-medium">1</div>
            </div>
          </div>

          <div className="bg-white rounded-lg border p-4 shadow-sm">
            <h3 className="text-sm font-semibold mb-2">Order Summary</h3>
            <p className="small-caption mb-3">Review your session order</p>

            <div className="text-sm">
              <div className="flex justify-between py-1"><div>Base Price</div><div>$45.00</div></div>
              <div className="flex justify-between py-1"><div>Service Fee</div><div>$3.00</div></div>
              <div className="flex justify-between py-1"><div>Tax</div><div>$2.47</div></div>
              <div className="border-t mt-2 pt-2 flex justify-between font-semibold"><div>Total</div><div>$50.47</div></div>
            </div>
          </div>

          <div className="bg-white rounded-lg border p-4 shadow-sm">
            <h3 className="text-sm font-semibold mb-2">Billing Info</h3>
            <p className="small-caption mb-3">Review your session booking</p>

            <div className="text-sm">
              <div className="text-gray-600 mb-1">Email Address</div>
              <div className="font-medium">johndoe@gmail.com</div>
            </div>
          </div>

          <div>
            <SessionFrequency onApply={(occ)=> setAppliedOccurrences(occ)} />
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg border p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-1">Payment Detail</h3>
            <p className="small-caption mb-4">Choose a payment method to complete your booking</p>

            <div className="flex gap-3 mb-4">
              <button onClick={()=>setPaymentMethod('card')} className={`px-3 py-2 rounded border ${paymentMethod==='card' ? 'bg-green-50 border-green-600 text-green-700' : 'bg-white'}`}>Credit Card</button>
              <button onClick={()=>setPaymentMethod('paypal')} className={`px-3 py-2 rounded border ${paymentMethod==='paypal' ? 'bg-green-50 border-green-600 text-green-700' : 'bg-white'}`}>Paypal</button>
            </div>

            {paymentMethod === 'card' ? (
              <form onSubmit={onPayNow} className="space-y-4">
                <div>
                  <label className="text-sm text-gray-600">Credit Card Number</label>
                  <input value={cardNumber} onChange={handleCardChange} placeholder="5344 7866 6767 4545" className="input-rounded mt-1" />
                  <div className="text-xs text-gray-400 mt-1">We use secured, encrypted processing</div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="text-sm text-gray-600">Expiry Date (MM/YY)</label>
                    <input value={expiry} onChange={handleExpiryChange} placeholder="09/28" className="input-rounded mt-1" />
                  </div>

                  <div>
                    <label className="text-sm text-gray-600">CVV</label>
                    <input value={cvv} onChange={handleCvv} placeholder="123" className="input-rounded mt-1" />
                  </div>

                  <div>
                    <label className="text-sm text-gray-600">Cardholder Name</label>
                    <input value={cardName} onChange={e=>setCardName(e.target.value)} placeholder="John Doe" className="input-rounded mt-1" />
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <input id="saveCard" checked={saveCard} onChange={e=>setSaveCard(e.target.checked)} type="checkbox" className="w-4 h-4" />
                  <label htmlFor="saveCard" className="text-sm text-gray-600">Securely save my card for future payments</label>
                </div>

                <div className="flex items-center justify-end gap-3 mt-4">
                  <button type="button" onClick={()=> { setCardNumber(''); setExpiry(''); setCvv(''); setCardName(''); setSaveCard(false) }} className="px-4 py-2 border rounded text-sm">Cancel</button>
                  <button type="submit" className="px-5 py-2 bg-brandgreen text-white rounded text-sm">Pay Now →</button>
                </div>
              </form>
            ) : (
              <div className="py-8 text-center">
                <p className="text-sm text-gray-600 mb-4">You will be redirected to PayPal to complete the payment.</p>
                <div className="flex justify-end gap-3">
                  <button onClick={()=>{ /* cancel */ }} className="px-4 py-2 border rounded text-sm">Cancel</button>
                  <button onClick={()=>{ alert('Redirecting to PayPal (demo)') }} className="px-5 py-2 bg-brandgreen text-white rounded text-sm">Pay with PayPal →</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}