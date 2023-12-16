using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using FNAP7716;
using FNAP7716.Services;
using FirebaseAdmin;
using Google.Apis.Auth.OAuth2;
using Org.BouncyCastle.Crypto;
using Org.BouncyCastle.Crypto.Engines;



var builder = WebAssemblyHostBuilder.CreateDefault(args);
builder.RootComponents.Add<App>("#app");
builder.RootComponents.Add<HeadOutlet>("head::after");

builder.Services.AddScoped(sp => new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) });
// builder.Services.AddScoped<FirestoreService>();

var firebaseOptions = new AppOptions
{
    Credential = GoogleCredential.FromJson(
        "{" +
        "\"type\": \"service_account\"," +
        "\"project_id\": \"nchu7716\"," +
        "\"private_key_id\": \"ae5a39d6cb8749e4a5d19c8cda3610038d959098\"," +
        "\"private_key\": \"-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQC0jbgjqAZjuBGj\nEW6XzOHYgiqDwfB4fS+zN0fpG5QAiYQg2drgRsN8bbD+g/uF/7PyAOSuFxbIRYGG\nzQyfy3PHqZuoQNCVbJqYwAPgeKGwXV3nLh42kvjZ5TW5uGNbBMyKL+BviE8EylMY\nVyg2y5XzsrDeya2ArP3Q9gXI0BuRNqQ4IqjNyneYo1igwUN3ZQwHX/X44+glkjDQ\nxBW5BEVEemFyBT5pfz2qiZb+d6gAXpNKhJJLUs67aw1pBbmAxSIm/lsZ1RSKh9eA\nnF0dmU5dk9yYhbe+2kvnMMtdAYh4L+nRhwmP2P1c/UQ1eIz+mfUD2asWA8bgcPDJ\njq7KQQgBAgMBAAECggEAAjXaMU8OOXgsWJoG9+MnaGdzCmsEVPBI5kV06xnWJHHK\niR2rphtdqys7W4lNeerrBrlbs1UnZ28g5l/iIb5rkeAd3ofhGdQzGg+/OGc3qQVi\nl/j+wBGpa974SvhSuI946s/qXCkvuPX6YZHXFWElij7HtymCRxEPGCjb4iUIklzy\n4GU1HnqR+TopCGCQBYWr2ajuC1s9H9FjHH9LYUSz4dxNN7TQz58JVjn1BDHkUdLn\nYFC3MIiWeuocjvd1cCRVAdBZL/LAYdesVzHToWNGVR1UiaZcCEUUzkTjE9qyvFX8\nzwyEqlUmt7i3TqabnLZ+WhagWYbRjmzr0Wam9SpSMQKBgQD5Ein1iR5KEhEQ5FP0\n0dzuSKenfHrKc7qZu0D0yiFrgB80W49KCqoAaEtLpd5TssEOPWHm55qYsoT4vthq\n96ofUNmF0a+P5XaRgfSEiQyUFW2S82AkaJJW+dzDxc6RFHKmoPDEh+zuZSir3Yii\nVqKr4HBGvdtvfJ2zM1WhVTicMQKBgQC5k5Z1qq1Zhfhm38EeCj0nWevzsmJNR20U\nqHUl+nx1W2aUAfgnFYOCS4ra9lov61kNueL9837F0YJv+c0ioVlX3TCULNM68qAk\nUHxOz1SFB/ukaLv7g7ah9G0Q/HpkH9gZPUkfxDJRvF0SRg5YMmRZhlUrlFmIWa6C\nQ+PxnbTE0QKBgQDxSKddNXgiSV4+/vJWOPfN3pSLrAtIFNSwGLbUbPvzKCsSjaBC\nGhKWUnKe1hCLBKABK3WsOrGJO2eVkUwWU9Z6f9g5yuhIfgJe84Xs3tdQnXGI6jw5\nCRS7LVKwVO/HnAd1ZHPZ79OXHmhIFlRG76am2sXpwgLR/ebHsvNBV02AAQKBgQCv\n8u/wBnAvdicrmrCmQ7zxp39gYlxzuuoAcSwJYzJHru5WHHvkyrAShH9V1cdysaiQ\nrBM9BnXHJzqN4oGNeP+VoAEkLE/mDw6o/6qsqkUPkJ8Vpbu934b0jSQvu8JrVgn0\n/Ddtp/6xom94GPYWx0h/3S65kAFHlwgvOCFR/13aUQKBgQDDV3KbEn7aSMijUdJl\n5gIdpIU995gx3YrY2awP4reBy+W8UbjDNx1l1Y50Iu1KKwlzump3MeIcCfPjYS0W\ntPdZ7Clf6gQi/Hd1qNTS2LOaU4x9D/p10l+ne5qKWvXGms5C7p6Y0bb1Pv3ciI5H\n0wW+Jh0+Zu+5MSJ6ArKusP5upQ==\n-----END PRIVATE KEY-----\"," +
    "\"client_email\": \"firebase-adminsdk-ko2gm@nchu7716.iam.gserviceaccount.com\"," +
    "\"client_id\": \"118203299461881295404\"," +
    "\"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\"," +
    "\"token_uri\": \"https://oauth2.googleapis.com/token\"," +
    "\"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\"," +
    "\"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-ko2gm%40nchu7716.iam.gserviceaccount.com\"" +
    "}")
};

FirebaseApp.Create(firebaseOptions);

await builder.Build().RunAsync();
