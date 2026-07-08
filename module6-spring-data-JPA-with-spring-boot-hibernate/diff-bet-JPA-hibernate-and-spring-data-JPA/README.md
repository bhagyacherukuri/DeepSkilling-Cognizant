# Difference Between JPA, Hibernate and Spring Data JPA

## Java Persistence API (JPA)

- JPA (Java Persistence API) is a Java specification (JSR 338).
- It defines how Java objects should be mapped to database tables.
- JPA does not provide any implementation.
- It only provides interfaces and annotations for persistence.

## Hibernate

- Hibernate is an Object Relational Mapping (ORM) framework.
- It is one of the most popular implementations of JPA.
- Hibernate converts Java objects into database records automatically.
- It generates SQL queries and manages database operations.

## Spring Data JPA

- Spring Data JPA is a Spring Framework module built on top of JPA.
- It uses Hibernate as the default JPA implementation.
- It reduces boilerplate code by providing ready-made repository interfaces such as `JpaRepository`.
- It simplifies CRUD operations without writing SQL or DAO implementation.

## Key Differences

| JPA | Hibernate | Spring Data JPA |
|-----|-----------|-----------------|
| Java Persistence Specification | JPA Implementation (ORM Framework) | Spring abstraction over JPA |
| Defines persistence rules | Implements JPA and performs ORM | Simplifies database access |
| No implementation | Generates SQL automatically | Provides built-in CRUD methods |
| Requires an implementation | More coding | Less coding and faster development |

## Relationship

```text
Spring Data JPA
        ↓
    Hibernate
        ↓
        JPA
        ↓
 MySQL Database
```

## Conclusion

- **JPA** is a specification that defines persistence rules.
- **Hibernate** is an ORM framework and implementation of JPA.
- **Spring Data JPA** is a Spring module built on top of JPA that reduces boilerplate code and provides ready-to-use repository methods.