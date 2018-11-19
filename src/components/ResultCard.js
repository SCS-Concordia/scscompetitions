import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Typography } from '@material-ui/core';

class ResultCard extends Component {
  render() {
    return (
      <Card>
        <CardContent>
          <Typography variant="headline">{this.props.title}</Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Team</TableCell>
                <TableCell numeric>Normalized Score</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.data.map((n,k) => {
                return (
                  <TableRow key={k}>
                    <TableCell component="th" scope="row">
                      {n.name}
                    </TableCell>
                    <TableCell numeric>{n.score}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    );
  }
}

export default ResultCard;
