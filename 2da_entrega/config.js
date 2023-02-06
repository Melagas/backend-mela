export default {
    fileSystem: {
        path: './DB'
    },
    mongodb: {
        cnxStr: 'mongodb://localhost/ecommerce',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    },
    firebase: {
        "type": "service_account",
        "project_id": "coderbackend-9fbbd",
        "private_key_id": "ea17b1e1dfa957e40cf117591274a6493eecb3d9",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC++FAF/adqW5ll\nebeOPaOvYzwpEZQB/+8LJQFM55SubK4PKVkj95I00nGDlb0fjq4d2fiZtm7c2w7C\nQobpV/Wxc/qlIfiI0dPQrvEWV3Ka4f3XxOuFkliqCvZcP8UANNpBc3vDsv3HlgBz\nbALIYIm1LZ9PHW1s4FnPcR9uc8RgdJzzbh5KX0qmRhLFEgTca1cj0K9AQiAbGJeb\nHKIwCxEb20gpRtz9+0dGsEMjElV3mXFmpXkMutyWeC2DWXJRbtWYw2pltYdbw7vF\nAPHT4XWNv/V+aIpMkZNgAi2j02i5PsJJAiwbhy9zxs96O8hpo/eRVNZhMKYDPalg\n6fTcNlW9AgMBAAECggEAF2N9FYa/6tBGJL34A6U7916NfzAmcupAAhrpolwYgxZP\naQ702mlXUD3X5jhAHe3RGFnaTyUfRdBUaelQ8aIytqWQNIpJEKS2LvBGGajjIeH8\nv2DgQY8vacAG9TxgKcrPUkXNCiZRW5DdBEXdv2HHa9enE770aGm/xh7CLTpjejaH\n0ozTe/cxngjW0/MrJMXHBiveO0Jf41qK7UByjYeKdFT4qinQpPQvDwmeqZMBJiZg\nDAME6MhBTq9rBqTaB2c9x3OvIvD1J26Gr5O8Ek1bxPUBP9FoR3JXiwBw8dKxaEv2\nHtUH7jUNljLTgT+4K31SUjMMBucJ9fz7UG8fjDoAxwKBgQDlLjUKi+OnFn2NFI8O\nU3IpjXxzGrRPLI0aG5nvVO0fKHbPUNMcEgqfnDRbQsQNSYwdy5VBWLSwuXW9Rm90\nG3Oxo3/cW5agFPJql01FwROoDD5RzqEPGITvT4nIPo+NzYgkqOMP50bLywDQpupk\ncaZwVz8s/0gRiiFYq2/xdeFa9wKBgQDVUWTVx63GMQ73HM8XhAQsEulsgqqIROq/\n7LRxsk4fPqpeXnDjpWEZG2qMgjZOZPUYt2Y9Oi60yaR4j3XkXklvbgyIxeE3en8n\nTEZt5O0Wvb7/X2Jv1m+DgVQ2sZ2hYjiSZ75RggbDRT/4B5HV66nX71QWbkwgaJ+A\nxr/YtsST6wKBgBMP29OLvRyprzmryxZK9ITmQsKkJvkq4HWadBxG+Q4NZIxr0ZNV\nINMTv/sTO5FLW78irsBnq2fDlTpwAFcs7VuKGNlwOMAJ3fvlp8S0gXkJw6k0QYsq\n4+uvtusT4QbPYJKEBZbOCsJqmR/Bsl82YLyZVSTd+tWSoqFoaQAxaNQTAoGBAJVF\nU65VAEED61j4i+IEu3ar9TO9a9/Xef27gbld8FTk4QsQQybJf1y2VqTkKWRKOUiG\nbcDCihRwVesXWIPphrG27IZ5EdRkn728HjygSVf0h0bkVFm2UGpRgcCUIZ3gwX2R\noxgeSOUz/ENv6JktQ7ia/NiFbjfvfk36xhy8KGrpAoGBALNEFadTYdQVVG9FX0ZN\nRo/1I7dJ710SAu5jouNjR5oKo/THqrfVHCyc530fujpkVdagRWoJEsSrVobT6/9p\nR/zxYjOZku2qeSjVPwqSkVJQBHCRZAPkzaWxWC8qTaz57dqwGHAlmbmVb/BcULXP\neYzyte+MqGSpQsQsjodkRbcY\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-540iq@coderbackend-9fbbd.iam.gserviceaccount.com",
        "client_id": "107698021037025337606",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-540iq%40coderbackend-9fbbd.iam.gserviceaccount.com"
      },
    // sqlite3: {
    //     client: 'sqlite3',
    //      connection: {
    //         filename: './DB/mydb.sqlite'
    //      }
    // },
    // mariaDb: {
    //     client: 'mysql',
    // connection: {
    //     host: '127.0.0.1',
    //     user: 'root',
    //     database: 'ecommerce'
    // }}
}