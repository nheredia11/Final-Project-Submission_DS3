import React, { useState } from 'react';

function Appointments() {
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    pet: '',
    date: '',
    time: '',
    description: '',
  });

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Cita enviada');
  };

  return (
    <div style={{ maxWidth: '400px', margin: '20px auto' }}>
      <h2>Pedir Cita Veterinaria</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Tu nombre" onChange={handleChange} required /><br/>
        <input type="text" name="pet" placeholder="Nombre de la mascota" onChange={handleChange} required /><br/>
        <input type="date" name="date" onChange={handleChange} required /><br/>
        <input type="time" name="time" onChange={handleChange} required /><br/>
        <textarea name="description" placeholder="Descripción" onChange={handleChange} required /><br/>
        <button type="submit">Enviar Cita</button>
      </form>

      <h3>Subir Imagen</h3>
      <input type="file" onChange={handleImageChange} />
      {image && (
        <div>
          <p>Preview:</p>
          <img src={image} alt="Preview" style={{ width: '100%' }} />
        </div>
      )}
    </div>
  );
}

export default Appointments;

