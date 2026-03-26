import React, { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet, useNavigation } from "react-router";
import Loader from "../components/Loader/Loader";
import toast from "react-hot-toast";

const Layouts = () => {
  // InstalledAppStateAndSaveToLocalStorage
  const [installedApps, setInstalledApps] = useState(() => {
    const storedApps = localStorage.getItem("installedApps");
    return storedApps ? JSON.parse(storedApps) : [];
  });

  // HandleInstallFunction
  const handleInstall = (app) => {
    if (!installedApps.find((item) => item.id === app.id)) {
      // UpdatedApps
      const updatedInstalledApps = [...installedApps, app];

      // SaveAppToLocalStorage
      localStorage.setItem(
        "installedApps",
        JSON.stringify(updatedInstalledApps),
      );

      setInstalledApps(updatedInstalledApps);

      // ShowToast
      toast.success(`${app.title} Installed Successfully!`);
    }
  };

  // HandleUninstall
  const handleUninstall = (appId) => {
    const updatedUninstalledApps = installedApps.filter(
      (app) => app.id !== appId,
    );
    setInstalledApps(updatedUninstalledApps);

    // ShowToastWhileUninstallApp
    const uninstallApp = installedApps.find((app) => app.id === appId);
    toast.error(`${uninstallApp.title} Uninstalled!`);

    // RemoveAppFromLocalStorage
    localStorage.setItem(
      "installedApps",
      JSON.stringify(updatedUninstalledApps),
    );
  };

  const navigation = useNavigation();

  // SetLoadingWhileNavigateDifferentRoutes
  const isLoading = navigation.state === "loading";

  return (
    <>
      {/* Header */}
      <Header />
      <main>
        {/* Main */}
        {isLoading ? (
          <Loader />
        ) : (
          <Outlet context={{ handleInstall, installedApps, handleUninstall }} />
        )}
      </main>
      {/* Footer */}
      {!isLoading && <Footer />}
    </>
  );
};

export default Layouts;
