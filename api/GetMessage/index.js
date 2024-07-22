
const fs = require('fs');
const util = require('util');
const readFileAsync = util.promisify(fs.readFile);

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    let message;
    try {
        message = await readFileAsync('./GetMessage/content.txt');
    } catch (err) {
        context.log.error('ERROR', err);
        // This rethrown exception will be handled by the Functions Runtime and will only fail the individual invocation
        throw err;
    }

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: message
    };
}
// SIG // Begin signature block
// SIG // MIIr4AYJKoZIhvcNAQcCoIIr0TCCK80CAQExDzANBglg
// SIG // hkgBZQMEAgEFADB3BgorBgEEAYI3AgEEoGkwZzAyBgor
// SIG // BgEEAYI3AgEeMCQCAQEEEBDgyQbOONQRoqMAEEvTUJAC
// SIG // AQACAQACAQACAQACAQAwMTANBglghkgBZQMEAgEFAAQg
// SIG // IdB1XH8g9vw+hveqAU+3TlrKE///co56y4P4xFC59Oeg
// SIG // ghFuMIIIfjCCB2agAwIBAgITNgAAAd9zgZcWvjL9DQAC
// SIG // AAAB3zANBgkqhkiG9w0BAQsFADBBMRMwEQYKCZImiZPy
// SIG // LGQBGRYDR0JMMRMwEQYKCZImiZPyLGQBGRYDQU1FMRUw
// SIG // EwYDVQQDEwxBTUUgQ1MgQ0EgMDEwHhcNMjQwMTIwMDEz
// SIG // MzQ0WhcNMjUwMTE5MDEzMzQ0WjAkMSIwIAYDVQQDExlN
// SIG // aWNyb3NvZnQgQXp1cmUgQ29kZSBTaWduMIIBIjANBgkq
// SIG // hkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA1bnAJpGyFqbK
// SIG // WMrMsnUMskYdi/KuYoGBXMtrw5PMRr1TEQYccGzrCSBH
// SIG // dMGPDe1lP8YJGDJ0rDOL5nNgePQxnawI0iam7MdM3/gy
// SIG // xY6wSE1HnHUYZatFShl/FG1TpINGiHxTS0bOA0qwmWId
// SIG // us8gfKpC/41Jgew4XARIYYDpV0UOCx51L+6n/ol6g7sB
// SIG // c/bVEwIfCRrIC0QStKErEX1AfhSRdislMc5nhVySohMp
// SIG // 7Fs+JKqDPdWoNWMNFPHdHvkYACotxbdXFwPt6ijOiNR9
// SIG // dXvzXSI4e6E4b6wbXxJ4MJcG0xdymTh3YSwRWdfFOL/F
// SIG // Xk5W+K/eN+OgmNvkip0GuwIDAQABo4IFijCCBYYwKQYJ
// SIG // KwYBBAGCNxUKBBwwGjAMBgorBgEEAYI3WwEBMAoGCCsG
// SIG // AQUFBwMDMD0GCSsGAQQBgjcVBwQwMC4GJisGAQQBgjcV
// SIG // CIaQ4w2E1bR4hPGLPoWb3RbOnRKBYIPdzWaGlIwyAgFk
// SIG // AgEOMIICdgYIKwYBBQUHAQEEggJoMIICZDBiBggrBgEF
// SIG // BQcwAoZWaHR0cDovL2NybC5taWNyb3NvZnQuY29tL3Br
// SIG // aWluZnJhL0NlcnRzL0JZMlBLSUNTQ0EwMS5BTUUuR0JM
// SIG // X0FNRSUyMENTJTIwQ0ElMjAwMSgyKS5jcnQwUgYIKwYB
// SIG // BQUHMAKGRmh0dHA6Ly9jcmwxLmFtZS5nYmwvYWlhL0JZ
// SIG // MlBLSUNTQ0EwMS5BTUUuR0JMX0FNRSUyMENTJTIwQ0El
// SIG // MjAwMSgyKS5jcnQwUgYIKwYBBQUHMAKGRmh0dHA6Ly9j
// SIG // cmwyLmFtZS5nYmwvYWlhL0JZMlBLSUNTQ0EwMS5BTUUu
// SIG // R0JMX0FNRSUyMENTJTIwQ0ElMjAwMSgyKS5jcnQwUgYI
// SIG // KwYBBQUHMAKGRmh0dHA6Ly9jcmwzLmFtZS5nYmwvYWlh
// SIG // L0JZMlBLSUNTQ0EwMS5BTUUuR0JMX0FNRSUyMENTJTIw
// SIG // Q0ElMjAwMSgyKS5jcnQwUgYIKwYBBQUHMAKGRmh0dHA6
// SIG // Ly9jcmw0LmFtZS5nYmwvYWlhL0JZMlBLSUNTQ0EwMS5B
// SIG // TUUuR0JMX0FNRSUyMENTJTIwQ0ElMjAwMSgyKS5jcnQw
// SIG // ga0GCCsGAQUFBzAChoGgbGRhcDovLy9DTj1BTUUlMjBD
// SIG // UyUyMENBJTIwMDEsQ049QUlBLENOPVB1YmxpYyUyMEtl
// SIG // eSUyMFNlcnZpY2VzLENOPVNlcnZpY2VzLENOPUNvbmZp
// SIG // Z3VyYXRpb24sREM9QU1FLERDPUdCTD9jQUNlcnRpZmlj
// SIG // YXRlP2Jhc2U/b2JqZWN0Q2xhc3M9Y2VydGlmaWNhdGlv
// SIG // bkF1dGhvcml0eTAdBgNVHQ4EFgQUju4tKpnu7Y7YxY8r
// SIG // iI5ZhjOnGwkwDgYDVR0PAQH/BAQDAgeAMEUGA1UdEQQ+
// SIG // MDykOjA4MR4wHAYDVQQLExVNaWNyb3NvZnQgQ29ycG9y
// SIG // YXRpb24xFjAUBgNVBAUTDTIzNjE2Nys1MDE5NzAwggHm
// SIG // BgNVHR8EggHdMIIB2TCCAdWgggHRoIIBzYY/aHR0cDov
// SIG // L2NybC5taWNyb3NvZnQuY29tL3BraWluZnJhL0NSTC9B
// SIG // TUUlMjBDUyUyMENBJTIwMDEoMikuY3JshjFodHRwOi8v
// SIG // Y3JsMS5hbWUuZ2JsL2NybC9BTUUlMjBDUyUyMENBJTIw
// SIG // MDEoMikuY3JshjFodHRwOi8vY3JsMi5hbWUuZ2JsL2Ny
// SIG // bC9BTUUlMjBDUyUyMENBJTIwMDEoMikuY3JshjFodHRw
// SIG // Oi8vY3JsMy5hbWUuZ2JsL2NybC9BTUUlMjBDUyUyMENB
// SIG // JTIwMDEoMikuY3JshjFodHRwOi8vY3JsNC5hbWUuZ2Js
// SIG // L2NybC9BTUUlMjBDUyUyMENBJTIwMDEoMikuY3JshoG9
// SIG // bGRhcDovLy9DTj1BTUUlMjBDUyUyMENBJTIwMDEoMiks
// SIG // Q049QlkyUEtJQ1NDQTAxLENOPUNEUCxDTj1QdWJsaWMl
// SIG // MjBLZXklMjBTZXJ2aWNlcyxDTj1TZXJ2aWNlcyxDTj1D
// SIG // b25maWd1cmF0aW9uLERDPUFNRSxEQz1HQkw/Y2VydGlm
// SIG // aWNhdGVSZXZvY2F0aW9uTGlzdD9iYXNlP29iamVjdENs
// SIG // YXNzPWNSTERpc3RyaWJ1dGlvblBvaW50MB8GA1UdIwQY
// SIG // MBaAFJZRhOBrb3v+2Aarw/KF5imuavnUMB8GA1UdJQQY
// SIG // MBYGCisGAQQBgjdbAQEGCCsGAQUFBwMDMA0GCSqGSIb3
// SIG // DQEBCwUAA4IBAQCXv2FzUgqF4rS3/1+aXyWaXqd3LI3a
// SIG // pgYIPvCq/vvFzI1sHZuLYi2rCTFDwoJqeTWJ98AuBnnx
// SIG // mMHxe15thTEkdoukFB44oBrugY3VkIeBMBmjaly5F5VD
// SIG // O1sNmdCq0baQi9egwjkzWbghTwMrUhxbJD1q6+qtxAbo
// SIG // jOj+VS4BUiogMXLp5XSaK26wa72UmYm9TiDcxRgELM1E
// SIG // dMraL1uhTqfrqFYYkAqpzoXgtaaZ2T7LO7516KIMjtMY
// SIG // EluNG0ZZbRn8J5TndyGf+N2To+V3nkoYOdks1RIsmK2Y
// SIG // w9ezEjc0DNSSiNO/prQAuw/nmf/oNqTP/daB3Kw6vTau
// SIG // EK0tMIII6DCCBtCgAwIBAgITHwAAAFHqj/accwyoOwAA
// SIG // AAAAUTANBgkqhkiG9w0BAQsFADA8MRMwEQYKCZImiZPy
// SIG // LGQBGRYDR0JMMRMwEQYKCZImiZPyLGQBGRYDQU1FMRAw
// SIG // DgYDVQQDEwdhbWVyb290MB4XDTIxMDUyMTE4NDQxNFoX
// SIG // DTI2MDUyMTE4NTQxNFowQTETMBEGCgmSJomT8ixkARkW
// SIG // A0dCTDETMBEGCgmSJomT8ixkARkWA0FNRTEVMBMGA1UE
// SIG // AxMMQU1FIENTIENBIDAxMIIBIjANBgkqhkiG9w0BAQEF
// SIG // AAOCAQ8AMIIBCgKCAQEAyZpSCX0Bno1W1yqXMhT6BUlJ
// SIG // ZWpa4p3xFeiTHO4vm2Q6C/azR5xwxnyYHrkSGDtS2P9X
// SIG // +KDE64V20mmEQkubxnPNeOVnE2RvdPGxgwlq+BhS3ONd
// SIG // VsQPj79q7XgHM9HhzB9+qk0PC9KN1zm9p/seyiRS6JF1
// SIG // dbOqRf1pUl7FAVxmgiCFgV8hHIb/rDPXig7FDi3S0yEx
// SIG // 2CUDVpIq8jEhG8anUFE1WYxM+ni0S5KHwwKPKV4qyGDo
// SIG // DO+9AmDoma3Chyu5WDlW5cdtqXTWsGPE3umtnX6Amlld
// SIG // UFLms4OVR4guKf+n5LIBCC6bTiocfXPomqYjYTKx7AGM
// SIG // faVLaaXmhQIDAQABo4IE3DCCBNgwEgYJKwYBBAGCNxUB
// SIG // BAUCAwIAAjAjBgkrBgEEAYI3FQIEFgQUEmgkQiFHy9Rr
// SIG // vjHPIKTACyN/P0cwHQYDVR0OBBYEFJZRhOBrb3v+2Aar
// SIG // w/KF5imuavnUMIIBBAYDVR0lBIH8MIH5BgcrBgEFAgMF
// SIG // BggrBgEFBQcDAQYIKwYBBQUHAwIGCisGAQQBgjcUAgEG
// SIG // CSsGAQQBgjcVBgYKKwYBBAGCNwoDDAYJKwYBBAGCNxUG
// SIG // BggrBgEFBQcDCQYIKwYBBQUIAgIGCisGAQQBgjdAAQEG
// SIG // CysGAQQBgjcKAwQBBgorBgEEAYI3CgMEBgkrBgEEAYI3
// SIG // FQUGCisGAQQBgjcUAgIGCisGAQQBgjcUAgMGCCsGAQUF
// SIG // BwMDBgorBgEEAYI3WwEBBgorBgEEAYI3WwIBBgorBgEE
// SIG // AYI3WwMBBgorBgEEAYI3WwUBBgorBgEEAYI3WwQBBgor
// SIG // BgEEAYI3WwQCMBkGCSsGAQQBgjcUAgQMHgoAUwB1AGIA
// SIG // QwBBMAsGA1UdDwQEAwIBhjASBgNVHRMBAf8ECDAGAQH/
// SIG // AgEAMB8GA1UdIwQYMBaAFCleUV5krjS566ycDaeMdQHR
// SIG // CQsoMIIBaAYDVR0fBIIBXzCCAVswggFXoIIBU6CCAU+G
// SIG // MWh0dHA6Ly9jcmwubWljcm9zb2Z0LmNvbS9wa2lpbmZy
// SIG // YS9jcmwvYW1lcm9vdC5jcmyGI2h0dHA6Ly9jcmwyLmFt
// SIG // ZS5nYmwvY3JsL2FtZXJvb3QuY3JshiNodHRwOi8vY3Js
// SIG // My5hbWUuZ2JsL2NybC9hbWVyb290LmNybIYjaHR0cDov
// SIG // L2NybDEuYW1lLmdibC9jcmwvYW1lcm9vdC5jcmyGgaps
// SIG // ZGFwOi8vL0NOPWFtZXJvb3QsQ049QU1FUm9vdCxDTj1D
// SIG // RFAsQ049UHVibGljJTIwS2V5JTIwU2VydmljZXMsQ049
// SIG // U2VydmljZXMsQ049Q29uZmlndXJhdGlvbixEQz1BTUUs
// SIG // REM9R0JMP2NlcnRpZmljYXRlUmV2b2NhdGlvbkxpc3Q/
// SIG // YmFzZT9vYmplY3RDbGFzcz1jUkxEaXN0cmlidXRpb25Q
// SIG // b2ludDCCAasGCCsGAQUFBwEBBIIBnTCCAZkwRwYIKwYB
// SIG // BQUHMAKGO2h0dHA6Ly9jcmwubWljcm9zb2Z0LmNvbS9w
// SIG // a2lpbmZyYS9jZXJ0cy9BTUVSb290X2FtZXJvb3QuY3J0
// SIG // MDcGCCsGAQUFBzAChitodHRwOi8vY3JsMi5hbWUuZ2Js
// SIG // L2FpYS9BTUVSb290X2FtZXJvb3QuY3J0MDcGCCsGAQUF
// SIG // BzAChitodHRwOi8vY3JsMy5hbWUuZ2JsL2FpYS9BTUVS
// SIG // b290X2FtZXJvb3QuY3J0MDcGCCsGAQUFBzAChitodHRw
// SIG // Oi8vY3JsMS5hbWUuZ2JsL2FpYS9BTUVSb290X2FtZXJv
// SIG // b3QuY3J0MIGiBggrBgEFBQcwAoaBlWxkYXA6Ly8vQ049
// SIG // YW1lcm9vdCxDTj1BSUEsQ049UHVibGljJTIwS2V5JTIw
// SIG // U2VydmljZXMsQ049U2VydmljZXMsQ049Q29uZmlndXJh
// SIG // dGlvbixEQz1BTUUsREM9R0JMP2NBQ2VydGlmaWNhdGU/
// SIG // YmFzZT9vYmplY3RDbGFzcz1jZXJ0aWZpY2F0aW9uQXV0
// SIG // aG9yaXR5MA0GCSqGSIb3DQEBCwUAA4ICAQBQECO3Tw/o
// SIG // 317Rrd7yadqcswPx1LvIYymkaTN6KcmuRt6HKa0Xe73U
// SIG // x2/AQ30TfgA9GBJngweRykKBusRzyOU17iIubJvy3gA2
// SIG // 1dwtqtB0DsoEv1U/ptVu2v++doTCJ/i+GbssVXkgaX8H
// SIG // +6EOGEmT4evp4GbwR4HwWlc+Dvf8HH8PdUA2Z04CvcwI
// SIG // fckSipbNm84jxJ8XjmTFTWscldL9edj2NsY6iGnyJFIy
// SIG // ur2PS7VRYyV3p1VAJp91gj1jRQtWEyCB8P5g9nE3z8u0
// SIG // ANaU/hjwEQCrdGyravWgnf2JtG+bT26YAokbc8m+32zU
// SIG // tXRO+NK3tAjhOu2FdsG3qNrF4sc7y37R/C+7Pcb/cFfh
// SIG // ttqsirepZii4xStcjMODYuXzGm3IJs0b0owHG6oKd7ZO
// SIG // GvHpmmh9K8/DLriD/sq8bURD10qi/wuW8zM7IpLg1vcR
// SIG // 9dIK2mc0pj44pc6UX0XbttP/VEJgu3lT2eI9VjWtaKjx
// SIG // 38xE9woSMyekPRtzTwgfuysF9DkJisr+yA4po/FPxpbB
// SIG // w9c/hBf32DH/GFxteS2pmjgKIbMP8sDukmEq3lVvuWNJ
// SIG // sybrZwQvQpvaM49fv+JKpLK5YWYEfwksYRR9wU8Hh/ID
// SIG // 9hRCEkbUoQ2W7mMpsp2Nbp/kcn4ivfolUy3Q9Yf0scsQ
// SIG // 6WTLYpm+AoCUJTGCGcowghnGAgEBMFgwQTETMBEGCgmS
// SIG // JomT8ixkARkWA0dCTDETMBEGCgmSJomT8ixkARkWA0FN
// SIG // RTEVMBMGA1UEAxMMQU1FIENTIENBIDAxAhM2AAAB33OB
// SIG // lxa+Mv0NAAIAAAHfMA0GCWCGSAFlAwQCAQUAoIGuMBkG
// SIG // CSqGSIb3DQEJAzEMBgorBgEEAYI3AgEEMBwGCisGAQQB
// SIG // gjcCAQsxDjAMBgorBgEEAYI3AgEVMC8GCSqGSIb3DQEJ
// SIG // BDEiBCBE4VTA2U5tf/11vTceKcAX6KZMiIC2+2PtG/IS
// SIG // zRHOwTBCBgorBgEEAYI3AgEMMTQwMqAUgBIATQBpAGMA
// SIG // cgBvAHMAbwBmAHShGoAYaHR0cDovL3d3dy5taWNyb3Nv
// SIG // ZnQuY29tMA0GCSqGSIb3DQEBAQUABIIBAKYh+3OHMBuE
// SIG // K303CtkqmNNTbOG0giV5Qa/Eg0LYsZhogK3IExqeFN9y
// SIG // aQkUhQgsO6DSeg3PqxO1gj5vuHJ1G+hH9KsiemTsVykc
// SIG // 2YOYtQLKvv6SqPy5o+N0AQByoaKUooYWIJQUs8FjF92E
// SIG // jau5htqIxCaJmbuGueFxeW6BxOL5y4WqJ5+KqMJFqBig
// SIG // w7rXJr6HNdPsrQVL+ip1+pqLwh3UxFxvKjUfltYpA8+A
// SIG // umxkNNaGfudI6Uh5jh3m5/Do2AlmYeCxOm5E2Dfy1/PQ
// SIG // WmooSYviYR8IgKGalBaXcR8zp3g0LiZIzGlfOHzKxkYx
// SIG // rLLqZzfmFtXuLgmmlMk9YFShgheSMIIXjgYKKwYBBAGC
// SIG // NwMDATGCF34wghd6BgkqhkiG9w0BBwKgghdrMIIXZwIB
// SIG // AzEPMA0GCWCGSAFlAwQCAQUAMIIBUQYLKoZIhvcNAQkQ
// SIG // AQSgggFABIIBPDCCATgCAQEGCisGAQQBhFkKAwEwMTAN
// SIG // BglghkgBZQMEAgEFAAQgcJenlRYeeLYHvFHsIuiluYki
// SIG // sNy3zq19QW3GvikSqc4CBmaVh6U22BgSMjAyNDA3MTYw
// SIG // MDIzNDIuNzdaMASAAgH0oIHRpIHOMIHLMQswCQYDVQQG
// SIG // EwJVUzETMBEGA1UECBMKV2FzaGluZ3RvbjEQMA4GA1UE
// SIG // BxMHUmVkbW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0IENv
// SIG // cnBvcmF0aW9uMSUwIwYDVQQLExxNaWNyb3NvZnQgQW1l
// SIG // cmljYSBPcGVyYXRpb25zMScwJQYDVQQLEx5uU2hpZWxk
// SIG // IFRTUyBFU046RjAwMi0wNUUwLUQ5NDcxJTAjBgNVBAMT
// SIG // HE1pY3Jvc29mdCBUaW1lLVN0YW1wIFNlcnZpY2WgghHp
// SIG // MIIHIDCCBQigAwIBAgITMwAAAfI+MtdkrHCRlAABAAAB
// SIG // 8jANBgkqhkiG9w0BAQsFADB8MQswCQYDVQQGEwJVUzET
// SIG // MBEGA1UECBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVk
// SIG // bW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0
// SIG // aW9uMSYwJAYDVQQDEx1NaWNyb3NvZnQgVGltZS1TdGFt
// SIG // cCBQQ0EgMjAxMDAeFw0yMzEyMDYxODQ1NThaFw0yNTAz
// SIG // MDUxODQ1NThaMIHLMQswCQYDVQQGEwJVUzETMBEGA1UE
// SIG // CBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEe
// SIG // MBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMSUw
// SIG // IwYDVQQLExxNaWNyb3NvZnQgQW1lcmljYSBPcGVyYXRp
// SIG // b25zMScwJQYDVQQLEx5uU2hpZWxkIFRTUyBFU046RjAw
// SIG // Mi0wNUUwLUQ5NDcxJTAjBgNVBAMTHE1pY3Jvc29mdCBU
// SIG // aW1lLVN0YW1wIFNlcnZpY2UwggIiMA0GCSqGSIb3DQEB
// SIG // AQUAA4ICDwAwggIKAoICAQC85fPLFwppYgxwYxkSEeYv
// SIG // QBtnYJTtKKj2FKxzHx0fgV6XgIIrmCWmpKl9IOzvOfJ/
// SIG // k6iP0RnoRo5F89Ad29edzGdlWbCj1Qyx5HUHNY8yu9El
// SIG // JOmdgeuNvTK4RW4wu9iB5/z2SeCuYqyX/v8z6Ppv29h1
// SIG // ttNWsSc/KPOeuhzSAXqkA265BSFT5kykxvzB0LxoxS6o
// SIG // WoXWK6wx172NRJRYcINfXDhURvUfD70jioE92rW/Ogjc
// SIG // OKxZkfQxLlwaFSrSnGs7XhMrp9TsUgmwsycTEOBdGVmf
// SIG // 1HCD7WOaz5EEcQyIS2BpRYYwsPMbB63uHiJ158qNh1SJ
// SIG // XuoL5wGDu/bZUzN+BzcLj96ixC7wJGQMBixWH9d++V8b
// SIG // l10RYdXDZlljRAvS6iFwNzrahu4DrYb7b8M7vvwhEL0x
// SIG // COvb7WFMsstscXfkdE5g+NSacphgFfcoftQ5qPD2PNVm
// SIG // rG38DmHDoYhgj9uqPLP7vnoXf7j6+LW8Von158D0Wrmk
// SIG // 7CumucQTiHRyepEaVDnnA2GkiJoeh/r3fShL6CHgPoTB
// SIG // 7oYU/d6JOncRioDYqqRfV2wlpKVO8b+VYHL8hn11JRFx
// SIG // 6p69mL8BRtSZ6dG/GFEVE+fVmgxYfICUrpghyQlETJPI
// SIG // TEBS15IsaUuW0GvXlLSofGf2t5DAoDkuKCbC+3VdPmlY
// SIG // VQIDAQABo4IBSTCCAUUwHQYDVR0OBBYEFJVbhwAm6tAx
// SIG // BM5cH8Bg0+Y64oZ5MB8GA1UdIwQYMBaAFJ+nFV0AXmJd
// SIG // g/Tl0mWnG1M1GelyMF8GA1UdHwRYMFYwVKBSoFCGTmh0
// SIG // dHA6Ly93d3cubWljcm9zb2Z0LmNvbS9wa2lvcHMvY3Js
// SIG // L01pY3Jvc29mdCUyMFRpbWUtU3RhbXAlMjBQQ0ElMjAy
// SIG // MDEwKDEpLmNybDBsBggrBgEFBQcBAQRgMF4wXAYIKwYB
// SIG // BQUHMAKGUGh0dHA6Ly93d3cubWljcm9zb2Z0LmNvbS9w
// SIG // a2lvcHMvY2VydHMvTWljcm9zb2Z0JTIwVGltZS1TdGFt
// SIG // cCUyMFBDQSUyMDIwMTAoMSkuY3J0MAwGA1UdEwEB/wQC
// SIG // MAAwFgYDVR0lAQH/BAwwCgYIKwYBBQUHAwgwDgYDVR0P
// SIG // AQH/BAQDAgeAMA0GCSqGSIb3DQEBCwUAA4ICAQA9S6eO
// SIG // 4HsfB00XpOgPabcN3QZeyipgilcQSDZ8g6VCv9FVHzdS
// SIG // q9XpAsljZSKNWSClhJEz5Oo3Um/taPnobF+8CkAdkcLQ
// SIG // hLdkShfr91kzy9vDPrOmlCA2FQ9jVhFaat2QM33z1p+G
// SIG // CP5tuvirFaUWzUWVDFOpo/O5zDpzoPYtTr0cFg3uXaRL
// SIG // T54UQ3Y4uPYXqn6wunZtUQRMiJMzxpUlvdfWGUtCvnW3
// SIG // eDBikDkix1XE98VcYIz2+5fdcvrHVeUarGXy4LRtwzmw
// SIG // psCtUh7tR6whCrVYkb6FudBdWM7TVvji7pGgfjesgnAS
// SIG // aD/ChLux66PGwaIaF+xLzk0bNxsAj0uhd6QdWr6TT39m
// SIG // /SNZ1/UXU7kzEod0vAY3mIn8X5A4I+9/e1nBNpURJ6Yi
// SIG // DKQd5YVgxsuZCWv4Qwb0mXhHIe9CubfSqZjvDawf2I22
// SIG // 9N3LstDJUSr1vGFB8iQ5W8ZLM5PwT8vtsKEBwHEYmwsu
// SIG // WmsxkimIF5BQbSzg9wz1O6jdWTxGG0OUt1cXWOMJUJzy
// SIG // EH4WSKZHOx53qcAvD9h0U6jEF2fuBjtJ/QDrWbb4urvA
// SIG // frvqNn9lH7gVPplqNPDIvQ8DkZ3lvbQsYqlz617e76ga
// SIG // 7SY0w71+QP165CPdzUY36et2Sm4pvspEK8hllq3IYcyX
// SIG // 0v897+X9YeecM1Pb1jCCB3EwggVZoAMCAQICEzMAAAAV
// SIG // xedrngKbSZkAAAAAABUwDQYJKoZIhvcNAQELBQAwgYgx
// SIG // CzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9u
// SIG // MRAwDgYDVQQHEwdSZWRtb25kMR4wHAYDVQQKExVNaWNy
// SIG // b3NvZnQgQ29ycG9yYXRpb24xMjAwBgNVBAMTKU1pY3Jv
// SIG // c29mdCBSb290IENlcnRpZmljYXRlIEF1dGhvcml0eSAy
// SIG // MDEwMB4XDTIxMDkzMDE4MjIyNVoXDTMwMDkzMDE4MzIy
// SIG // NVowfDELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldhc2hp
// SIG // bmd0b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoT
// SIG // FU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjEmMCQGA1UEAxMd
// SIG // TWljcm9zb2Z0IFRpbWUtU3RhbXAgUENBIDIwMTAwggIi
// SIG // MA0GCSqGSIb3DQEBAQUAA4ICDwAwggIKAoICAQDk4aZM
// SIG // 57RyIQt5osvXJHm9DtWC0/3unAcH0qlsTnXIyjVX9gF/
// SIG // bErg4r25PhdgM/9cT8dm95VTcVrifkpa/rg2Z4VGIwy1
// SIG // jRPPdzLAEBjoYH1qUoNEt6aORmsHFPPFdvWGUNzBRMhx
// SIG // XFExN6AKOG6N7dcP2CZTfDlhAnrEqv1yaa8dq6z2Nr41
// SIG // JmTamDu6GnszrYBbfowQHJ1S/rboYiXcag/PXfT+jlPP
// SIG // 1uyFVk3v3byNpOORj7I5LFGc6XBpDco2LXCOMcg1KL3j
// SIG // tIckw+DJj361VI/c+gVVmG1oO5pGve2krnopN6zL64NF
// SIG // 50ZuyjLVwIYwXE8s4mKyzbnijYjklqwBSru+cakXW2dg
// SIG // 3viSkR4dPf0gz3N9QZpGdc3EXzTdEonW/aUgfX782Z5F
// SIG // 37ZyL9t9X4C626p+Nuw2TPYrbqgSUei/BQOj0XOmTTd0
// SIG // lBw0gg/wEPK3Rxjtp+iZfD9M269ewvPV2HM9Q07BMzlM
// SIG // jgK8QmguEOqEUUbi0b1qGFphAXPKZ6Je1yh2AuIzGHLX
// SIG // pyDwwvoSCtdjbwzJNmSLW6CmgyFdXzB0kZSU2LlQ+QuJ
// SIG // YfM2BjUYhEfb3BvR/bLUHMVr9lxSUV0S2yW6r1AFemzF
// SIG // ER1y7435UsSFF5PAPBXbGjfHCBUYP3irRbb1Hode2o+e
// SIG // FnJpxq57t7c+auIurQIDAQABo4IB3TCCAdkwEgYJKwYB
// SIG // BAGCNxUBBAUCAwEAATAjBgkrBgEEAYI3FQIEFgQUKqdS
// SIG // /mTEmr6CkTxGNSnPEP8vBO4wHQYDVR0OBBYEFJ+nFV0A
// SIG // XmJdg/Tl0mWnG1M1GelyMFwGA1UdIARVMFMwUQYMKwYB
// SIG // BAGCN0yDfQEBMEEwPwYIKwYBBQUHAgEWM2h0dHA6Ly93
// SIG // d3cubWljcm9zb2Z0LmNvbS9wa2lvcHMvRG9jcy9SZXBv
// SIG // c2l0b3J5Lmh0bTATBgNVHSUEDDAKBggrBgEFBQcDCDAZ
// SIG // BgkrBgEEAYI3FAIEDB4KAFMAdQBiAEMAQTALBgNVHQ8E
// SIG // BAMCAYYwDwYDVR0TAQH/BAUwAwEB/zAfBgNVHSMEGDAW
// SIG // gBTV9lbLj+iiXGJo0T2UkFvXzpoYxDBWBgNVHR8ETzBN
// SIG // MEugSaBHhkVodHRwOi8vY3JsLm1pY3Jvc29mdC5jb20v
// SIG // cGtpL2NybC9wcm9kdWN0cy9NaWNSb29DZXJBdXRfMjAx
// SIG // MC0wNi0yMy5jcmwwWgYIKwYBBQUHAQEETjBMMEoGCCsG
// SIG // AQUFBzAChj5odHRwOi8vd3d3Lm1pY3Jvc29mdC5jb20v
// SIG // cGtpL2NlcnRzL01pY1Jvb0NlckF1dF8yMDEwLTA2LTIz
// SIG // LmNydDANBgkqhkiG9w0BAQsFAAOCAgEAnVV9/Cqt4Swf
// SIG // ZwExJFvhnnJL/Klv6lwUtj5OR2R4sQaTlz0xM7U518Jx
// SIG // Nj/aZGx80HU5bbsPMeTCj/ts0aGUGCLu6WZnOlNN3Zi6
// SIG // th542DYunKmCVgADsAW+iehp4LoJ7nvfam++Kctu2D9I
// SIG // dQHZGN5tggz1bSNU5HhTdSRXud2f8449xvNo32X2pFaq
// SIG // 95W2KFUn0CS9QKC/GbYSEhFdPSfgQJY4rPf5KYnDvBew
// SIG // VIVCs/wMnosZiefwC2qBwoEZQhlSdYo2wh3DYXMuLGt7
// SIG // bj8sCXgU6ZGyqVvfSaN0DLzskYDSPeZKPmY7T7uG+jIa
// SIG // 2Zb0j/aRAfbOxnT99kxybxCrdTDFNLB62FD+CljdQDzH
// SIG // VG2dY3RILLFORy3BFARxv2T5JL5zbcqOCb2zAVdJVGTZ
// SIG // c9d/HltEAY5aGZFrDZ+kKNxnGSgkujhLmm77IVRrakUR
// SIG // R6nxt67I6IleT53S0Ex2tVdUCbFpAUR+fKFhbHP+Crvs
// SIG // QWY9af3LwUFJfn6Tvsv4O+S3Fb+0zj6lMVGEvL8CwYKi
// SIG // excdFYmNcP7ntdAoGokLjzbaukz5m/8K6TT4JDVnK+AN
// SIG // uOaMmdbhIurwJ0I9JZTmdHRbatGePu1+oDEzfbzL6Xu/
// SIG // OHBE0ZDxyKs6ijoIYn/ZcGNTTY3ugm2lBRDBcQZqELQd
// SIG // VTNYs6FwZvKhggNMMIICNAIBATCB+aGB0aSBzjCByzEL
// SIG // MAkGA1UEBhMCVVMxEzARBgNVBAgTCldhc2hpbmd0b24x
// SIG // EDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jv
// SIG // c29mdCBDb3Jwb3JhdGlvbjElMCMGA1UECxMcTWljcm9z
// SIG // b2Z0IEFtZXJpY2EgT3BlcmF0aW9uczEnMCUGA1UECxMe
// SIG // blNoaWVsZCBUU1MgRVNOOkYwMDItMDVFMC1EOTQ3MSUw
// SIG // IwYDVQQDExxNaWNyb3NvZnQgVGltZS1TdGFtcCBTZXJ2
// SIG // aWNloiMKAQEwBwYFKw4DAhoDFQBri943cFLH2TfQEfB0
// SIG // 5SLICg74CKCBgzCBgKR+MHwxCzAJBgNVBAYTAlVTMRMw
// SIG // EQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRt
// SIG // b25kMR4wHAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRp
// SIG // b24xJjAkBgNVBAMTHU1pY3Jvc29mdCBUaW1lLVN0YW1w
// SIG // IFBDQSAyMDEwMA0GCSqGSIb3DQEBCwUAAgUA6kAGJTAi
// SIG // GA8yMDI0MDcxNTIwMzM0MVoYDzIwMjQwNzE2MjAzMzQx
// SIG // WjBzMDkGCisGAQQBhFkKBAExKzApMAoCBQDqQAYlAgEA
// SIG // MAYCAQACARQwBwIBAAICE1owCgIFAOpBV6UCAQAwNgYK
// SIG // KwYBBAGEWQoEAjEoMCYwDAYKKwYBBAGEWQoDAqAKMAgC
// SIG // AQACAwehIKEKMAgCAQACAwGGoDANBgkqhkiG9w0BAQsF
// SIG // AAOCAQEAkmHFtX+wR4j1bTOZmf/luX49PxxRzVCJ4m6s
// SIG // i6wZjDxn5ZPf+jTL2/mKagBltmwWT0cGKN2cTa9dV2OS
// SIG // FSg0M6rSFAyL2spLId406pnVBmO/XlEYB20BWnrvfHhv
// SIG // N22KzkiE8piTovfg67n+fU+Hx8euMiikr6dcV33OIB9r
// SIG // UU2cceve92r5LcZXrt7vhrnYZrHDpB6f21zIeoY3we7o
// SIG // 3jUabp9vSjzraBNRqNqbGrsuSWmIcICc5jS447Ml2TTI
// SIG // xLk9YHppvkF35xDfNqDB8z6vQK1U1HKdR0nqMP4l32Cm
// SIG // TBfIJfJATRWYH7x8n0q3MxGCM8q8/PXXLwkUyWlluzGC
// SIG // BA0wggQJAgEBMIGTMHwxCzAJBgNVBAYTAlVTMRMwEQYD
// SIG // VQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRtb25k
// SIG // MR4wHAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24x
// SIG // JjAkBgNVBAMTHU1pY3Jvc29mdCBUaW1lLVN0YW1wIFBD
// SIG // QSAyMDEwAhMzAAAB8j4y12SscJGUAAEAAAHyMA0GCWCG
// SIG // SAFlAwQCAQUAoIIBSjAaBgkqhkiG9w0BCQMxDQYLKoZI
// SIG // hvcNAQkQAQQwLwYJKoZIhvcNAQkEMSIEICUyUCCPj2YJ
// SIG // oTGGBg4fMd1ypRo6FDTMMBI+DOlT1AJwMIH6BgsqhkiG
// SIG // 9w0BCRACLzGB6jCB5zCB5DCBvQQg+No+HS4xUlzTj5jh
// SIG // G7kFRRscTiy5nqdEdJS7RddKQ0QwgZgwgYCkfjB8MQsw
// SIG // CQYDVQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3RvbjEQ
// SIG // MA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWljcm9z
// SIG // b2Z0IENvcnBvcmF0aW9uMSYwJAYDVQQDEx1NaWNyb3Nv
// SIG // ZnQgVGltZS1TdGFtcCBQQ0EgMjAxMAITMwAAAfI+Mtdk
// SIG // rHCRlAABAAAB8jAiBCAELSkSUtU6Y7lzHoECmNQNaSC9
// SIG // Xxfo5xdsZShd5E+sDTANBgkqhkiG9w0BAQsFAASCAgBw
// SIG // nfRVkRUITvfzAQqbFWRpWGmXHjyBdS+YQRp+dgH3l4J9
// SIG // Htl2rX+JbAYkS+wPRpon/XNWzfnLXFJ1x63/q1+aMAh9
// SIG // +nXI4D2HEZD5q6okA2KVYeVcVNMHr2/x7PX0B+477wIR
// SIG // C6ljG1OjMSAoNmspgsu5YkkMtd+xq9o1Mf6CFB58PL1d
// SIG // qEMmhaVjrMK8QlrYh8h2qRmuwVZ8sOyUQNXtDuUJZQ+h
// SIG // C8HAXzYuMeQJ9jVR295v4nr2Cke5KyXVx7zzXb+Kn4B9
// SIG // cnzMzqCcmirw50TqDlPa+DndT718lMgyXeOjyBv47jnK
// SIG // zxmpghXReLQInZuPIkudWNhAOo69LSWI+HRH7ggW7PH5
// SIG // YLnkZeE9+DVT7a1AEZ46V6WBQIuDqentkfn/Kcd/xISN
// SIG // o/5xSVWTVzaN3zOOIDa+xVfmR7vJIQyBjjdICya66EeK
// SIG // Sg/5hPy/dvLddHlSw0bNcwoQ0lCThcuMeyiSUwHfnI6N
// SIG // h0E6fTASm7JdW6M4j9uHk9KYq74jrqgO9wO64DACh1Nu
// SIG // 1lRGoZk5+XubeszUFB+dIlVIct1ezGX3Bb9QYQ2p/ehn
// SIG // j39BNIAZcRX4LqseHEKdBpkjSaBjqDX37er8ohNo2u05
// SIG // 8tyG3RyAXRFM6YhX9/Oaj6AcIemyeAP+QGbNNznsRkSs
// SIG // lPPUE80Ok2ERV/GyAQ0Ffg==
// SIG // End signature block
