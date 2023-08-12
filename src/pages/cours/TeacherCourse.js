// import * as React from 'react';
// import { Helmet } from 'react-helmet-async';
// import { filter } from 'lodash';
// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// // @mui
// import {
//   Card,
//   Table,
//   Stack,
//   Paper,
//   Popover,
//   Checkbox,
//   TableRow,
//   MenuItem,
//   TableBody,
//   TableCell,
//   Container,
//   Typography,
//   IconButton,
//   TableContainer,
//   TablePagination,
// } from '@mui/material';

// import Iconify from '../../components/iconify';
// import Scrollbar from '../../components/scrollbar';
// // sections
// import { UserListHead, UserListToolbar } from '../../sections/@dashboard/user';

// // mock
// import USERLIST from '../../_mock/user';
// import { AddCourse } from '../../Redux/actions';

// // ----------------------------------------------------------------------

// const TABLE_HEAD = [
//   { id: 'level', label: 'Level', alignRight: false },
//   { id: 'title', label: 'Title', alignRight: false },
//   { id: 'description', label: 'Description', alignRight: false },
//   { id: '' },
// ];

// // ----------------------------------------------------------------------

// function descendingComparator(a, b, orderBy) {
//   if (b[orderBy] < a[orderBy]) {
//     return -1;
//   }
//   if (b[orderBy] > a[orderBy]) {
//     return 1;
//   }
//   return 0;
// }

// function getComparator(order, orderBy) {
//   return order === 'desc'
//     ? (a, b) => descendingComparator(a, b, orderBy)
//     : (a, b) => -descendingComparator(a, b, orderBy);
// }

// function applySortFilter(array, comparator, query) {
//   const stabilizedThis = array.map((el, index) => [el, index]);
//   stabilizedThis.sort((a, b) => {
//     const order = comparator(a[0], b[0]);
//     if (order !== 0) return order;
//     return a[1] - b[1];
//   });
//   if (query) {
//     return filter(array, (_user) => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
//   }
//   return stabilizedThis.map((el) => el[0]);
// }

// export default function TeacherCourse() {
//   const dispatch = useDispatch();
//   const courses = useSelector((state) => state.course.courses);
//   const themes = useSelector((state) => state.theme.themes);
//   console.log(themes);

//   const [open, setOpen] = useState(null);

//   const [page, setPage] = useState(0);

//   const [order, setOrder] = useState('asc');

//   const [selected, setSelected] = useState([]);

//   const [orderBy, setOrderBy] = useState('name');

//   const [filterName, setFilterName] = useState('');

//   const [rowsPerPage, setRowsPerPage] = useState(5);

//   // .................................................................

//   const [courseid, setCourseid] = useState();
//   const handleCourse = (e) => {
//     setCourseid(e.target.value);
//     console.log(e.target.value);
//   };
//   const LevelTab = [
//     'première année',
//     'deuxième année',
//     'troisième année',
//     'Quatrième année',
//     'Cinquième année',
//     'sixième année',
//   ];

//   // .................................................................
//   const handleOpenMenu = (event) => {
//     setOpen(event.currentTarget);
//   };

//   const handleCloseMenu = () => {
//     setOpen(null);
//   };

//   const handleRequestSort = (event, property) => {
//     const isAsc = orderBy === property && order === 'asc';
//     setOrder(isAsc ? 'desc' : 'asc');
//     setOrderBy(property);
//   };

//   const handleSelectAllClick = (event) => {
//     if (event.target.checked) {
//       const newSelecteds = USERLIST.map((n) => n.name);
//       setSelected(newSelecteds);
//       return;
//     }
//     setSelected([]);
//   };

//   const handleClick = (event, name) => {
//     const selectedIndex = selected.indexOf(name);
//     let newSelected = [];
//     if (selectedIndex === -1) {
//       newSelected = newSelected.concat(selected, name);
//     } else if (selectedIndex === 0) {
//       newSelected = newSelected.concat(selected.slice(1));
//     } else if (selectedIndex === selected.length - 1) {
//       newSelected = newSelected.concat(selected.slice(0, -1));
//     } else if (selectedIndex > 0) {
//       newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
//     }
//     setSelected(newSelected);
//   };

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setPage(0);
//     setRowsPerPage(parseInt(event.target.value, 10));
//   };

//   const handleFilterByName = (event) => {
//     setPage(0);
//     setFilterName(event.target.value);
//   };

//   const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - USERLIST.length) : 0;

//   const filteredUsers = applySortFilter(USERLIST, getComparator(order, orderBy), filterName);

//   const isNotFound = !filteredUsers.length && !!filterName;

//   return (
//     <>
//       <Helmet>
//         <title> User | Minimal UI </title>
//       </Helmet>

//       <Container>
//         <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
//           <Typography variant="h4" gutterBottom>
//             User
//           </Typography>
//         </Stack>

//         <Card>
//           <UserListToolbar numSelected={selected.length} filterName={filterName} onFilterName={handleFilterByName} />

//           <Scrollbar>
//             <TableContainer sx={{ minWidth: 800 }}>
//               <Table>
//                 <UserListHead
//                   order={order}
//                   orderBy={orderBy}
//                   headLabel={TABLE_HEAD}
//                   rowCount={courses.length}
//                   numSelected={selected.length}
//                   onRequestSort={handleRequestSort}
//                   onSelectAllClick={handleSelectAllClick}
//                 />
//                 <TableBody key={courses._id}>
//                   {courses.length > 0
//                     ? courses.map((course) => {
//                         const selectedUser = selected.indexOf(course) !== -1;

//                         return (
//                           <TableRow hover key={course.titre} tabIndex={-1} role="checkbox" selected={selectedUser}>
//                             <TableCell padding="checkbox">
//                               <Checkbox />
//                             </TableCell>

//                             <TableCell component="th" scope="row" padding="none">
//                               <Stack>
//                                 <Typography variant="subtitle2" noWrap>
//                                   {course.level}
//                                 </Typography>
//                               </Stack>
//                             </TableCell>
//                             <TableCell align="left">{course.titre}</TableCell>
//                             <TableCell align="left">{course.description}</TableCell>

//                             <TableCell align="right">
//                               <IconButton size="large" sx={{ color: 'error.main' }}>
//                                 <Iconify icon={'eva:trash-2-outline'} />
//                               </IconButton>
//                             </TableCell>
//                           </TableRow>
//                         );
//                       })
//                     : null}
//                   {emptyRows > 0 && (
//                     <TableRow style={{ height: 53 * emptyRows }}>
//                       <TableCell colSpan={6} />
//                     </TableRow>
//                   )}
//                 </TableBody>

//                 {isNotFound && (
//                   <TableBody>
//                     <TableRow>
//                       <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
//                         <Paper
//                           sx={{
//                             textAlign: 'center',
//                           }}
//                         >
//                           <Typography variant="h6" paragraph>
//                             Not found
//                           </Typography>

//                           <Typography variant="body2">
//                             No results found for &nbsp;
//                             <strong>&quot;{filterName}&quot;</strong>.
//                             <br /> Try checking for typos or using complete words.
//                           </Typography>
//                         </Paper>
//                       </TableCell>
//                     </TableRow>
//                   </TableBody>
//                 )}
//               </Table>
//             </TableContainer>
//           </Scrollbar>

//           <TablePagination
//             rowsPerPageOptions={[5, 10, 25]}
//             component="div"
//             count={USERLIST.length}
//             rowsPerPage={rowsPerPage}
//             page={page}
//             onPageChange={handleChangePage}
//             onRowsPerPageChange={handleChangeRowsPerPage}
//           />
//         </Card>
//       </Container>

//       <select className="form-control" value={courseid} onChange={handleCourse}>
//         <option>Select Category</option>
//         {courses.map((option) => (
//           <option key={option.value} value={option._id}>
//             {' '}
//             {option.titre}
//           </option>
//         ))}
//       </select>
//     </>
//   );
// }
