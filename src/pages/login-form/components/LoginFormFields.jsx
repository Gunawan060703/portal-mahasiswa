import React, { useState } from 'react';
import Input from '../../../components/ui/input';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const LoginFormFields = ({ formData, errors, onInputChange, onSubmit, isLoading, selectedRole }) => {
  const [showPassword, setShowPassword] = useState(false);

  const placeholder = selectedRole === "student" 
    ? "Silakan masukkan NIM" 
    : "Silakan masukkan NIDN";

  return (
    <form onSubmit={onSubmit} className="space-y-4 md:space-y-5">
      <Input
        label=""
        type="text"
        name="username"
        placeholder={placeholder}
        value={formData?.username}
        onChange={onInputChange}
        error={errors?.username}
        required
        disabled={isLoading}
      />
      <div className="relative">
        <Input
          label="Password"
          type={showPassword ? 'text' : 'password'}
          name="password"
          placeholder="Masukkan password Anda"
          value={formData?.password}
          onChange={onInputChange}
          error={errors?.password}
          required
          disabled={isLoading}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-[38px] text-muted-foreground hover:text-foreground transition-colors"
          aria-label={showPassword ? 'Sembunyikan password' : 'Tampilkan password'}
        >
          <Icon name={showPassword ? 'EyeOff' : 'Eye'} size={20} />
        </button>
      </div>
      <div className="flex items-center justify-between text-sm">
        <a
          href="#"
          className="text-primary hover:text-secondary transition-colors font-medium"
          onClick={(e) => e?.preventDefault()}
        >
          Lupa Password?
        </a>
      </div>
      <Button
        type="submit"
        variant="default"
        fullWidth
        loading={isLoading}
        disabled={isLoading}
        className="mt-6"
      >
        {isLoading ? 'Memproses...' : 'Masuk'}
      </Button>
    </form>
  );
};

export default LoginFormFields;