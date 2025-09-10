import React, { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  return (
    <form className="space-y-3">
      <div>
        <label className="block text-xs text-white/60 mb-1">Full Name</label>
        <input
          className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 outline-none focus:ring-2 focus:ring-primary/60"
          placeholder="Enter name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-xs text-white/60 mb-1">Email</label>
        <input
          type="email"
          className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 outline-none focus:ring-2 focus:ring-primary/60"
          placeholder="Enter email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-xs text-white/60 mb-1">Message</label>
        <textarea
          className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 outline-none focus:ring-2 focus:ring-primary/60"
          placeholder="Message"
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
      </div>
      <button type="button" className="w-full rounded-md bg-primary px-4 py-2 text-white hover:bg-primary/90">Connect Now</button>
    </form>
  );
}


