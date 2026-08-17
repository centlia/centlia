export function getServiceName(key: string): string {
  const services: Record<string, string> = {
    redes: 'Infraestructura y Redes',
    seguridad: 'Seguridad y Videovigilancia',
    desarrollo: 'Desarrollo a Medida',
    iot: 'Internet de las Cosas (IoT)',
    mantenimiento: 'Mantenimiento Integral',
    ia: 'Inteligencia Artificial',
    firma: 'Firma Electrónica',
    facturacion: 'Facturación Electrónica',
    soporte: 'Soporte Técnico Especializado',
    hardware: 'Hardware y Energía',
    ecommerce: 'E-commerce',
    cloud: 'Cloud y Multinube',
    otro: 'Otro',
  }
  return services[key] || key || 'No especificado'
}

export function generateClientEmail(data: {
  name: string
  email: string
  phone: string
  company?: string
  service?: string
  message: string
}) {
  const serviceDisplay = getServiceName(data.service || '')

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family:'Segoe UI',Arial,sans-serif;background:#f8f9fa;padding:40px 20px;margin:0;">
  <div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.08);">
    <div style="padding:25px 40px;background:linear-gradient(90deg,#60A5FA,#6D28D9);text-align:center;">
      <h1 style="color:#DC2626;font-size:32px;margin:0;font-weight:800;letter-spacing:2px;">CENTLIA</h1>
      <p style="color:#FFFFFF;font-size:11px;margin:4px 0 0;letter-spacing:3px;text-transform:uppercase;font-weight:600;">Uniendo tecnologías, conectando soluciones</p>
    </div>
    <div style="padding:30px 40px;">
      <h2 style="color:#0A1628;font-size:22px;margin:0 0 8px;">✅ ¡Gracias por contactarnos, ${data.name}!</h2>
      <p style="color:#475569;font-size:16px;">En menos de 24 horas un asesor se pondrá en contacto contigo.</p>
      <div style="margin-top:24px;padding-top:20px;border-top:2px solid #f1f5f9;text-align:center;">
        <a href="https://wa.me/525574223578" style="display:inline-block;background:#25D366;color:#fff;padding:10px 24px;border-radius:8px;text-decoration:none;font-weight:600;font-size:14px;">💬 WhatsApp</a>
        <a href="tel:5574223578" style="display:inline-block;background:#5B21B6;color:#fff;padding:10px 24px;border-radius:8px;text-decoration:none;font-weight:600;font-size:14px;margin-left:8px;">📞 Llamar</a>
      </div>
    </div>
    <div style="padding:20px 40px;background:#f8fafc;text-align:center;border-top:1px solid #e2e8f0;">
      <p style="color:#94a3b8;font-size:12px;margin:0;">© 2026 CENTLIA — Uniendo tecnologías, conectando soluciones</p>
      <p style="color:#cbd5e1;font-size:11px;margin:4px 0 0;">Este es un correo automático, por favor no responder.</p>
    </div>
  </div>
</body>
</html>
  `
}

export function generateInternalEmail(data: {
  name: string
  email: string
  phone: string
  company?: string
  service?: string
  message: string
}) {
  const serviceDisplay = getServiceName(data.service || '')

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family:'Segoe UI',Arial,sans-serif;background:#f8f9fa;padding:40px 20px;margin:0;">
  <div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.08);">
    <div style="padding:25px 40px;background:linear-gradient(90deg,#60A5FA,#6D28D9);text-align:center;">
      <h1 style="color:#DC2626;font-size:32px;margin:0;font-weight:800;letter-spacing:2px;">CENTLIA</h1>
      <p style="color:#FFFFFF;font-size:11px;margin:4px 0 0;letter-spacing:3px;text-transform:uppercase;font-weight:600;">Uniendo tecnologías, conectando soluciones</p>
    </div>
    <div style="padding:30px 40px;">
      <h2 style="color:#0A1628;font-size:22px;margin:0 0 8px;">🔔 Nuevo mensaje de contacto</h2>
      <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
        <tr><td style="padding:10px 0;border-bottom:1px solid #f1f5f9;"><strong style="color:#0A1628;">👤 Nombre:</strong> <span style="color:#475569;">${data.name}</span></td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #f1f5f9;"><strong style="color:#0A1628;">📧 Email:</strong> <span style="color:#475569;">${data.email}</span></td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #f1f5f9;"><strong style="color:#0A1628;">📞 Teléfono:</strong> <span style="color:#475569;">${data.phone}</span></td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #f1f5f9;"><strong style="color:#0A1628;">🏢 Empresa:</strong> <span style="color:#475569;">${data.company || 'No especificada'}</span></td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #f1f5f9;"><strong style="color:#0A1628;">📂 Servicio:</strong> <span style="color:#475569;">${serviceDisplay}</span></td></tr>
        <tr><td style="padding:10px 0;"><strong style="color:#0A1628;">💬 Mensaje:</strong><br><p style="color:#475569;margin:6px 0 0;background:#f8fafc;padding:12px;border-radius:8px;border-left:4px solid #5B21B6;">${data.message}</p></td></tr>
      </table>
      <div style="margin-top:24px;padding-top:20px;border-top:2px solid #f1f5f9;text-align:center;">
        <a href="https://wa.me/525574223578" style="display:inline-block;background:#25D366;color:#fff;padding:10px 24px;border-radius:8px;text-decoration:none;font-weight:600;font-size:14px;">💬 WhatsApp</a>
        <a href="tel:5574223578" style="display:inline-block;background:#5B21B6;color:#fff;padding:10px 24px;border-radius:8px;text-decoration:none;font-weight:600;font-size:14px;margin-left:8px;">📞 Llamar</a>
      </div>
    </div>
    <div style="padding:20px 40px;background:#f8fafc;text-align:center;border-top:1px solid #e2e8f0;">
      <p style="color:#94a3b8;font-size:12px;margin:0;">© 2026 CENTLIA — Uniendo tecnologías, conectando soluciones</p>
    </div>
  </div>
</body>
</html>
  `
}
