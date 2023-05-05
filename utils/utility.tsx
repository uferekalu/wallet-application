import { useState } from 'react';

export default function Utility() {
  const [isHome, setIsHome] = useState<any>(false);
  const [isTransactions, setIsTransactions] = useState<any>(false);
  const [isContacts, setIsContacts] = useState<any>(false);
  const [isProfile, setIsProfile] = useState<any>(false);

  const handleIsHome = () => {
    setIsHome(true);
    setIsTransactions(false);
    setIsContacts(false);
    setIsProfile(false);
  };

  const handleIsTransactions = () => {
    setIsTransactions(true);
    setIsHome(false);
    setIsContacts(false);
    setIsProfile(false);
  };

  const handleIsContacts = () => {
    setIsContacts(true);
    setIsHome(false);
    setIsTransactions(false);
    setIsProfile(false);
  };

  const handleIsProfile = () => {
    setIsProfile(true);
    setIsHome(false);
    setIsTransactions(false);
    setIsContacts(false);
  };
  return {
    isHome,
    setIsHome,
    isTransactions,
    setIsTransactions,
    isContacts,
    setIsContacts,
    isProfile,
    setIsProfile,
    handleIsHome,
    handleIsTransactions,
    handleIsContacts,
    handleIsProfile,
  };
}
