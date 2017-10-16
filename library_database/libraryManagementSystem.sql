/*===========================================
	1. How many copies of the book titled 
	"The Lost Tribe" are owned by the library 
	branch whose name is "Sharpstown"?
===========================================*/
create proc dbo.uspNo_of_lost_tribe_sharpstown
as
SELECT no_of_copies
FROM book_copies
WHERE book_id = 16;

/*===============================================
	2. How many copies of the book titled 
	"The Lost Tribe" are owned by each library 
	branch?
===============================================*/
create proc dbo.uspCopies_of_tlt_in_all
as
select no_of_copies , branch_name
from book_copies
inner join library_branch
on book_copies.branch_id=library_branch.branch_id
where book_id = 16;

/*================================================
	3. Retrieve the names of all borrowers who do 
	not have any books checked out.
================================================*/
create proc dbo.uspBorrowers_no_loans
as
select name
from borrower
where card_no not in
	(select card_no
	from book_loans);

/*===============================================
	4. For each book that is loaned out from the 
	"Sharpstown" branch and whose DueDate is today, 
	retrieve the book title, the borrower's name, 
	and the borrower's address.
================================================*/
--this one is not finished, need help 
--with getting date.
create proc dbo.uspGetBortrowersCurrentDateDue
as
select title , name , address 
from book_loans
inner join borrower
on book_loans.card_no=borrower.card_no
inner join books
on book_loans.book_id=books.book_id
where due_date = CAST(CURRENT_TIMESTAMP AS DATE);

/*===============================================
	5. For each library branch, retrieve the 
	branch name and the total number of books loaned 
	out from that branch.
===============================================*/
create proc dbo.uspNoBooksLoaned
as
select count(no_of_copies) as no_of_copies , branch_name
from book_copies
right join book_loans
on book_loans.book_id=book_copies.book_id
inner join library_branch
on book_copies.branch_id=library_branch.branch_id
group by branch_name;

/*==================================================
	6. Retrieve the names, addresses, and number of 
	books checked out for all borrowers who have more 
	than five books checked out.
===================================================*/

select count(book_id) as no_of_loans , name , address , phone
from book_loans
inner join borrower
on book_loans.card_no=borrower.card_no
where book_id >=5;

/*====================================================
	7. For each book authored (or co-authored) by 
	"Stephen King", retrieve the title and the number 
	of copies owned by the library branch whose 
	name is "Central".
=====================================================*/
create proc dbo.uspStephenKingBooksCentral
as
select title , no_of_copies , branch_name
from books
inner join book_copies
on books.book_id=book_copies.book_id
inner join book_authors
on book_authors.book_id=book_copies.book_id
inner join library_branch
on book_copies.branch_id=library_branch.branch_id
where author_name= 'stephen king' 
AND branch_name='central';