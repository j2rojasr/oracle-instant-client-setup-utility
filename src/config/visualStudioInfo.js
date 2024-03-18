// https://learn.microsoft.com/es-es/cpp/windows/latest-supported-vc-redist
const visualStudioInfo = {
  "21.13.0.0.0": {
    "version": "Visual Studio 2017 Redistributable",
    "redistributableLink": {
      "ARM64": "https://aka.ms/vs/17/release/vc_redist.arm64.exe",
      "X86": "https://aka.ms/vs/17/release/vc_redist.x86.exe",
      "X64": "https://aka.ms/vs/17/release/vc_redist.x64.exe"
    }
  },
  "19.22.0.0.0": {
    "version": "Visual Studio 2013 (VC++ 12.0)",
    "redistributableLink": {
      "X86": "https://aka.ms/highdpimfc2013x86enu",
      "X64": "https://aka.ms/highdpimfc2013x64enu"
    }
  },
  "18.5.0.0.0": {
    "version": "Visual Studio 2013 (VC++ 12.0)",
    "redistributableLink": {
      "X86": "https://aka.ms/highdpimfc2013x86enu",
      "X64": "https://aka.ms/highdpimfc2013x64enu"
    }
  },
  "12.2.0.1.0": {
    "version": "Visual Studio 2013 (VC++ 12.0)",
    "redistributableLink": {
      "X86": "https://aka.ms/highdpimfc2013x86enu",
      "X64": "https://aka.ms/highdpimfc2013x64enu"
    }
  },
  "12.1.0.2.0": {
    "version": "Visual Studio 2010 (VC++ 10.0) SP1 (no longer supported)",
    "redistributableLink": {
      "X86": "https://download.microsoft.com/download/1/6/5/165255E7-1014-4D0A-B094-B6A430A6BFFC/vcredist_x86.exe",
      "X64": "https://download.microsoft.com/download/1/6/5/165255E7-1014-4D0A-B094-B6A430A6BFFC/vcredist_x64.exe"
    }
  },
  "11.2.0.4.0": {
    "version": "Visual Studio 2010 (VC++ 10.0) SP1 (no longer supported)",
    "redistributableLink": {
      "X86": "https://download.microsoft.com/download/1/6/5/165255E7-1014-4D0A-B094-B6A430A6BFFC/vcredist_x86.exe",
      "X64": "https://download.microsoft.com/download/1/6/5/165255E7-1014-4D0A-B094-B6A430A6BFFC/vcredist_x64.exe"
    }
  }
};

export default visualStudioInfo;
