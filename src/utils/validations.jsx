
// Basit bir email doğrulama fonksiyonu

export function validateEmail(email) {

  // E-posta adresinin boş olup olmadığını kontrol et
  if (!email) return false;

  // Basit bir regex ile e-posta formatını kontrol et
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return re.test(email);
}
// En az 6 karakter doğrulaması yapan fonksiyon
export function validateMinLength(value, minLength ) {
  if (typeof value !== "string") return false;
  return value.length >= minLength;
}

export function isNotEmpty(value) {
    return value.trim() !== "";
  }