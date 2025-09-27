const qs = s => document.querySelector(s)

// tahun footer
const setYear = () => {
  const y = document.getElementById('year')
  if (y) y.textContent = new Date().getFullYear()
}

// greeting name (localStorage)
const loadName = () => {
  const saved = localStorage.getItem('my_name') || ''
  const nameSpan = document.getElementById('welcomeName')
  const input = document.getElementById('nameInput')
  if (nameSpan) nameSpan.textContent = saved || 'Guest'
  if (input) input.value = saved
}
const saveName = () => {
  const input = document.getElementById('nameInput')
  const name = (input?.value || '').trim()
  if (!name) return alert('Namanya diisi dulu ya 🙂')
  localStorage.setItem('my_name', name)
  const nameSpan = document.getElementById('welcomeName')
  if (nameSpan) nameSpan.textContent = name
}

// jam realtime
const tickTime = () => {
  const el = document.getElementById('time')
  if (el) el.textContent = new Date().toString()
}

// validasi & tampilkan hasil form
const onSubmitMessage = e => {
  e.preventDefault()
  const f = e.currentTarget
  const name = f.name.value.trim()
  const email = f.email.value.trim()
  const message = f.message.value.trim()
  const emailOK = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  if (!name || !email || !message) return alert('Semua field wajib diisi.')
  if (!emailOK) return alert('Format email belum benar.')

  document.getElementById('r_name').textContent = name
  document.getElementById('r_email').textContent = email
  document.getElementById('r_message').textContent = message

  f.reset()
}

document.addEventListener('DOMContentLoaded', () => {
  setYear()
  loadName()
  const saveBtn = document.getElementById('saveNameBtn')
  if (saveBtn) saveBtn.addEventListener('click', saveName)

  setInterval(tickTime, 1000);
  tickTime();

  const form = document.getElementById('messageForm')
  if (form) form.addEventListener('submit', onSubmitMessage)
})
