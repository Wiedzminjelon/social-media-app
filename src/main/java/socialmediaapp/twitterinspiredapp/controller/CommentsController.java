package socialmediaapp.twitterinspiredapp.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import socialmediaapp.twitterinspiredapp.dto.CommentsDto;

import javax.validation.Valid;

@RestController
@RequestMapping (" /api/comments/")
@AllArgsConstructor
public class CommentsController {

    @PostMapping
    public  void createComment(@RequestBody CommentsDto commentsDto) {



    }

}
