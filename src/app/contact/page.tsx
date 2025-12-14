'use client';

import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submissionStatus, setSubmissionStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmissionStatus(null);

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSubmissionStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setSubmissionStatus('error');
    }
  };

  return (
    <main className="py-5">
      <div className="studio-container" style={{ maxWidth: '720px' }}>
        <div className="text-center mb-5">
          <span className="badge-pill bg-opacity-10 bg-primary text-primary">Start a project</span>
          <h1 className="display-5 fw-bold text-white mt-3" style={{ fontFamily: 'var(--font-display)' }}>
            Tell us about your next release
          </h1>
          <p className="text-muted mt-3">
            Share a few details and the Commonline crew will follow up within one business day.
          </p>
        </div>
        <div className="glass-card p-4 p-lg-5">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Project goals</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="What are you hoping to build or transform?"
                required
              />
            </Form.Group>

            <button type="submit" className="btn btn-primary btn-lg fw-semibold">
              Send message
            </button>
          </Form>

          <div className="mt-4 text-muted small">
            <p className="mb-1">Prefer a direct intro? Email us at <a href="mailto:hello@commonline.studio">hello@commonline.studio</a>.</p>
            <p className="mb-0">We typically onboard new partners in two to four weeks.</p>
          </div>

          {submissionStatus === 'success' && (
            <Alert variant="success" className="mt-4">
              Your message has been sent successfully! We will be in touch shortly.
            </Alert>
          )}
          {submissionStatus === 'error' && (
            <Alert variant="danger" className="mt-4">
              Something went wrong. Please try again later or email us directly.
            </Alert>
          )}
        </div>
      </div>
    </main>
  );
}
