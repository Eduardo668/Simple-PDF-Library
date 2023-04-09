package com.pdf.library.exceptions;

public class RegistrationException extends RuntimeException {
    public RegistrationException(String message) {
        super(message);
    }
    public RegistrationException() {
        super();
    }
}
