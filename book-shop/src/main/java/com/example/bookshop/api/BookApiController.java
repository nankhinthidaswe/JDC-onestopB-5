package com.example.bookshop.api;

import com.example.bookshop.dto.BookDto;
import com.example.bookshop.entity.Book;
import com.example.bookshop.service.BookService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@RequestMapping("")
public class BookApiController {

    private final BookService bookService;

    @GetMapping("/book-list")
    public List<BookDto> bookList() {
        return bookService.findAllBook().stream()
                .map(this::toDto).collect(Collectors.toList());
    }

    public BookDto toDto(Book book) {
        return new BookDto(
                book.getId(),
                book.getTitle(),
                book.getPrice(),
                book.getAuthor(),
                book.getImageUrl(),
                book.getPublishedDate(),
                book.getCategory().name()
        );
    }

}
