import { useState, useEffect, useRef } from 'react';
import './index.css';

// SVG Icons
const ChevronLeft = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m15 18-6-6 6-6"/>
  </svg>
);

const UserIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
  </svg>
);

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>
  </svg>
);

const countryCodes = [
  { name: 'India', code: '+91', iso: 'IN' },
  { name: 'United States', code: '+1', iso: 'US' },
  { name: 'United Kingdom', code: '+44', iso: 'GB' },
  { name: 'Australia', code: '+61', iso: 'AU' },
  { name: 'Canada', code: '+1', iso: 'CA' },
  { name: 'Germany', code: '+49', iso: 'DE' },
  { name: 'France', code: '+33', iso: 'FR' },
  { name: 'Japan', code: '+81', iso: 'JP' },
  { name: 'China', code: '+86', iso: 'CN' },
  { name: 'Brazil', code: '+55', iso: 'BR' },
  { name: 'South Africa', code: '+27', iso: 'ZA' },
  { name: 'Italy', code: '+39', iso: 'IT' },
  { name: 'Spain', code: '+34', iso: 'ES' },
  { name: 'Mexico', code: '+52', iso: 'MX' },
  { name: 'Russia', code: '+7', iso: 'RU' },
  { name: 'Netherlands', code: '+31', iso: 'NL' },
  { name: 'Switzerland', code: '+41', iso: 'CH' },
  { name: 'Sweden', code: '+46', iso: 'SE' },
  { name: 'Singapore', code: '+65', iso: 'SG' },
  { name: 'United Arab Emirates', code: '+971', iso: 'AE' },
  { name: 'Saudi Arabia', code: '+966', iso: 'SA' },
  { name: 'Argentina', code: '+54', iso: 'AR' },
  { name: 'New Zealand', code: '+64', iso: 'NZ' },
  { name: 'Ireland', code: '+353', iso: 'IE' },
  { name: 'Israel', code: '+972', iso: 'IL' },
  { name: 'South Korea', code: '+82', iso: 'KR' },
  { name: 'Turkey', code: '+90', iso: 'TR' },
  { name: 'Poland', code: '+48', iso: 'PL' },
  { name: 'Indonesia', code: '+62', iso: 'ID' },
  { name: 'Malaysia', code: '+60', iso: 'MY' },
  { name: 'Philippines', code: '+63', iso: 'PH' },
  { name: 'Thailand', code: '+66', iso: 'TH' },
  { name: 'Vietnam', code: '+84', iso: 'VN' },
  { name: 'Egypt', code: '+20', iso: 'EG' },
  { name: 'Nigeria', code: '+234', iso: 'NG' },
  { name: 'Kenya', code: '+254', iso: 'KE' }
];

const CountrySelect = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selected = countryCodes.find(c => c.code === value) || countryCodes[0];

  return (
    <div className="custom-select-container" ref={dropdownRef}>
      <div className="custom-select-trigger" onClick={() => setIsOpen(!isOpen)}>
        <img src={`https://flagcdn.com/w20/${selected.iso.toLowerCase()}.png`} alt={selected.iso} />
        <span>{selected.code}</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
      </div>
      {isOpen && (
        <div className="custom-select-dropdown">
          {countryCodes.map((country) => (
            <div 
              key={country.iso} 
              className={`custom-select-option ${selected.iso === country.iso ? 'selected' : ''}`}
              onClick={() => {
                onChange({ target: { name: 'countryCode', value: country.code } });
                setIsOpen(false);
              }}
            >
              <img src={`https://flagcdn.com/w20/${country.iso.toLowerCase()}.png`} alt={country.iso} />
              <span>{country.name} ({country.code})</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const LockIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);

const CheckCircleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/>
  </svg>
);

const AlertCircleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/>
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
  </svg>
);

function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    countryCode: '+91',
    mobileNumber: '',
    password: '',
    confirmPassword: '',
    agreed: false
  });

  const [touched, setTouched] = useState({
    fullName: false,
    email: false,
    mobileNumber: false,
    password: false,
    confirmPassword: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const getPasswordStrength = (pwd) => {
    let strength = 0;
    if (pwd.length > 5) strength++;
    if (pwd.length > 8) strength++;
    if (/[A-Z]/.test(pwd) && /[0-9]/.test(pwd)) strength++;
    if (/[^A-Za-z0-9]/.test(pwd)) strength++;
    return strength; 
  };

  const strength = getPasswordStrength(formData.password);
  const isMatch = formData.password === formData.confirmPassword && formData.confirmPassword.length > 0;
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    setTouched(prev => ({ ...prev, [name]: true }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Trigger validation styling
    setTouched({
      fullName: true,
      email: true,
      mobileNumber: true,
      password: true,
      confirmPassword: true
    });

    const isMobileValid = formData.mobileNumber.length === 10 && /^\d+$/.test(formData.mobileNumber);

    if (!formData.fullName || !formData.email.includes('@') || !isMobileValid || strength < 3 || !isMatch || !formData.agreed) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate network delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div className="page-wrapper">
      <div className="card-container">
        {/* Left Panel */}
        <div className="left-panel">
          <div className="bg-decorations">
            <div className="glass-shape shape-1"></div>
            <div className="glass-shape shape-2"></div>
            <div className="glass-shape shape-3"></div>
          </div>
          
          <div className="left-content">
            <button className="back-btn" aria-label="Go back">
              <ChevronLeft />
            </button>
            
            <div className="text-content">
              <h1>Create<br />Account</h1>
              <p>Join us and enjoy<br />a seamless experience<br />tailored just for you.</p>
            </div>
            
            <div className="secure-badge">
              <LockIcon />
              <span>Your data is secure<br />and encrypted</span>
            </div>
          </div>
        </div>
        
        {/* Right Panel */}
        <div className="right-panel">
          {isSuccess ? (
            <div className="success-state">
              <div className="success-icon-large">
                <CheckCircleIcon />
              </div>
              <h2>Account Created!</h2>
              <p>Your account has been created successfully. Welcome aboard!</p>
              <button className="submit-btn" onClick={() => {
                setIsSuccess(false);
                setFormData({
                  fullName: '',
                  email: '',
                  countryCode: '+91',
                  mobileNumber: '',
                  password: '',
                  confirmPassword: '',
                  agreed: false
                });
                setTouched({
                  fullName: false,
                  email: false,
                  mobileNumber: false,
                  password: false,
                  confirmPassword: false
                });
              }}>
                <span>Continue</span>
                <div className="btn-icon">
                  <ArrowRightIcon />
                </div>
              </button>
            </div>
          ) : (
            <>
              <div className="form-header">
                <h2>Sign Up</h2>
                <p>Please fill in the details to create your account.</p>
              </div>
              
              <form className="signup-form" onSubmit={handleSubmit}>
            
            {/* Full Name */}
            <div className="input-group">
              <div className="input-icon">
                <UserIcon />
              </div>
              <div className="input-content">
                <label>Full Name</label>
                <input 
                  type="text" 
                  name="fullName" 
                  value={formData.fullName} 
                  onChange={handleChange}
                />
              </div>
              <div className="status-icon">
                {formData.fullName.length > 0 && <CheckCircleIcon />}
              </div>
            </div>
            
            {/* Email */}
            <div className="input-group">
              <div className="input-icon">
                <MailIcon />
              </div>
              <div className="input-content">
                <label>Email Address</label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange}
                />
              </div>
              <div className="status-icon">
                {formData.email.includes('@') && <CheckCircleIcon />}
              </div>
            </div>
            
            {/* Mobile Number */}
            <div className={`input-group ${touched.mobileNumber && formData.mobileNumber.length > 0 && (formData.mobileNumber.length !== 10 || !/^\d+$/.test(formData.mobileNumber)) ? 'error' : ''}`}>
              <div className="input-icon">
                <PhoneIcon />
              </div>
              <div className="input-content">
                <label>Mobile Number</label>
                <div className="phone-wrapper">
                  <CountrySelect value={formData.countryCode} onChange={handleChange} />
                  <input 
                    type="tel" 
                    name="mobileNumber" 
                    value={formData.mobileNumber} 
                    onChange={handleChange}
                    maxLength={10}
                  />
                </div>
              </div>
              <div className="status-icon">
                {formData.mobileNumber.length === 10 && /^\d+$/.test(formData.mobileNumber) && <CheckCircleIcon />}
                {touched.mobileNumber && formData.mobileNumber.length > 0 && (formData.mobileNumber.length !== 10 || !/^\d+$/.test(formData.mobileNumber)) && <AlertCircleIcon />}
              </div>
            </div>
            
            {/* Password */}
            <div className="input-group" style={{ marginBottom: '8px' }}>
              <div className="input-icon">
                <LockIcon />
              </div>
              <div className="input-content">
                <label>Password</label>
                <input 
                  type="password" 
                  name="password" 
                  value={formData.password} 
                  onChange={handleChange}
                />
              </div>
              <div className="status-icon">
                {formData.password.length > 0 && <CheckCircleIcon />}
              </div>
            </div>
            
            {/* Password Strength */}
            <div className="password-strength">
              <div className="strength-bars">
                <div className={`bar ${strength >= 1 ? 'active' : ''}`}></div>
                <div className={`bar ${strength >= 2 ? 'active' : ''}`}></div>
                <div className={`bar ${strength >= 3 ? 'active' : ''}`}></div>
                <div className={`bar ${strength >= 4 ? 'active' : ''}`}></div>
              </div>
              <span className={`strength-text ${strength >= 3 ? 'strong' : ''}`}>
                {strength >= 3 ? 'Strong password' : strength > 0 ? 'Weak password' : ''}
              </span>
            </div>
            
            {/* Confirm Password */}
            <div className={`input-group ${!isMatch && touched.confirmPassword ? 'error' : ''}`}>
              <div className="input-icon">
                <LockIcon />
              </div>
              <div className="input-content">
                <label>Confirm Password</label>
                <input 
                  type="password" 
                  name="confirmPassword" 
                  value={formData.confirmPassword} 
                  onChange={handleChange}
                />
              </div>
              <div className="status-icon">
                {!isMatch && touched.confirmPassword ? <AlertCircleIcon /> : (isMatch ? <CheckCircleIcon /> : null)}
              </div>
            </div>
            {!isMatch && touched.confirmPassword && (
              <div className="error-text">Passwords do not match</div>
            )}
            
            {/* Checkbox */}
            <div className="checkbox-group">
              <label className="checkbox-container">
                <input 
                  type="checkbox" 
                  name="agreed"
                  checked={formData.agreed}
                  onChange={handleChange}
                />
                <span className="checkmark">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span className="checkbox-label">
                  I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
                </span>
              </label>
            </div>
            
            {/* Submit Button */}
            <button className="submit-btn" type="submit" disabled={isSubmitting}>
              <span>{isSubmitting ? 'Creating Account...' : 'Create Account'}</span>
              <div className="btn-icon">
                {isSubmitting ? <div className="spinner"></div> : <ArrowRightIcon />}
              </div>
            </button>
            
          </form>
          </>
        )}
        </div>
      </div>
    </div>
  );
}

export default App;

