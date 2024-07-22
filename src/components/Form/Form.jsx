import React, { useState } from "react";
import styles from "./Form.module.css";

function Form() {
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    address: "",
    employees: "",
    description: "",
  });

  function validateUzbekPhoneNumber(phoneNumber) {
    const uzbekPhoneRegex = /^\+998\d{9}$/;
    return uzbekPhoneRegex.test(phoneNumber);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!validateUzbekPhoneNumber(formData.phone)) {
      alert("Telefon raqami noto'g'ri. Iltimos, to'g'ri raqam kiriting.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Email noto'g'ri formatda kiritildi.");
      return;
    }

    const existingData = JSON.parse(localStorage.getItem("formData")) || [];

    existingData.push(formData);

    localStorage.setItem("formData", JSON.stringify(existingData));
  }

  return (
    <div className={styles.formContainer}>
      <h2>Kompaniya ma’lumotlari</h2>
      <p>Kompaniya haqida ma’lumotlarni kiriting</p>
      <div className={styles.uploadContainer}>
        <div className={styles.uploadCircle}></div>
        <button className={styles.uploadButton}>Yuklash</button>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="companyName">Kompaniya nomi *</label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          placeholder="Kompaniya nomi"
          required
          value={formData.companyName}
          onChange={handleChange}
        />

        <label htmlFor="email">Email *</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="phone">Telefon raqami *</label>
        <div className={styles.phoneInput}>
          <select id="phoneCode" name="phoneCode" disabled>
            <option value="UZ">UZ +998</option>
          </select>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Telefon raqami"
            required
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <label htmlFor="country">Davlat *</label>
        <select
          id="country"
          name="country"
          required
          value={formData.country}
          onChange={handleChange}
        >
          <option value="">Davlat</option>
          <option value="UZ">Uzbekistan</option>
        </select>

        <label htmlFor="city">Shahar *</label>
        <select
          id="city"
          name="city"
          required
          value={formData.city}
          onChange={handleChange}
        >
          <option value="">Shahar</option>
          <option value="Tashkent">Toshkent</option>
        </select>

        <label htmlFor="address">Yashash joyi *</label>
        <input
          type="text"
          id="address"
          name="address"
          placeholder="Joy"
          required
          value={formData.address}
          onChange={handleChange}
        />

        <label htmlFor="employees">Hodimlar soni *</label>
        <select
          id="employees"
          name="employees"
          required
          value={formData.employees}
          onChange={handleChange}
        >
          <option value="">Hodimlar soni</option>
          <option value="100">100 ta</option>
        </select>

        <label htmlFor="description">Izoh *</label>
        <textarea
          id="description"
          name="description"
          placeholder="Kompaniya haqida izoh qo’shing"
          required
          value={formData.description}
          onChange={handleChange}
        ></textarea>

        <div className={styles.buttons}>
          <button type="button" className={styles.backButton}>
            Orqaga
          </button>
          <button type="submit" className={styles.nextButton}>
            Keyingisi
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;