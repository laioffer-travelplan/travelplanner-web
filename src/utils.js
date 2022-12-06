export const login = (credential) => {
    const loginUrl = `/login?username=${credential.username}&password=${credential.password}`;

    return fetch(loginUrl, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        credentials: "include",
        }).then((response) => {
        if (response.status < 200 || response.status >= 300) {
            throw Error("Fail to log in");
        }
        });
    };

export const signup = (data) => {
    const signupUrl = "/signup";
    
    return fetch(signupUrl, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).then((response) => {
        if (response.status < 200 || response.status >= 300) {
        throw Error("Fail to sign up");
        }
    });
    };


export const getCart = () => {
return fetch("/cart").then((response) => {
    if (response.status < 200 || response.status >= 300) {
    throw Error("Fail to get palns");
    }

    return response.json();
});
};

export const getcity = () => {
    return fetch("/city").then((response) => {
        if (response.status < 200 || response.status >= 300) {
        throw Error("Fail to get palns");
        }
    
        return response.json();
    });
    };

