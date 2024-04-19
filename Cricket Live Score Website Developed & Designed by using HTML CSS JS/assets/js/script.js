export function getRandomApiKey() 
{
    const apiKeys =
    [
        'e11b9bf8-ee72-45ee-af7c-fc5e7e075961',
        'b5a0aeae-25a6-40ed-a943-08bcc8eb393d',
        '288b83d9-8fbd-47b5-9061-36e1fd727ce8',
        'a54c5412-a45f-427d-9209-27f6c6513fa3',
        '9418d143-71c8-4d69-be61-301e8c928bce',
        'facf5628-e8ec-4281-89d6-d18e8c7da869',
        'a0cf4147-f52b-4787-b452-917bae79c20c',
        'b6d2d036-8ea1-4150-9a85-aebb65fcbf2a',
        '3ce31909-1d47-4c68-8306-348043d705e9'
    ];

    // Generate a random index to select a random API key
    const randomIndex = Math.floor(Math.random() * apiKeys.length);
    const randomApiKey = apiKeys[randomIndex];

    return randomApiKey;
}
